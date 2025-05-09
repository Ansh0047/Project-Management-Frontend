import { AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Avatar } from "@radix-ui/react-avatar";
import { useForm } from "react-hook-form";

const CreateCommentForm = ({ issueId }) => {
    const form = useForm({
        defaultValues: {
            content: "",
        }
    });

    const onSubmit = (data) => {
        console.log("content is", data);
    };
    return (
        <div>
            <Form {...form} >
                <form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)} >
                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex gap-2">
                                    <div>
                                    <Avatar>
                                        <AvatarFallback className="bg-slate-800 px-3">A</AvatarFallback>
                                    </Avatar>

                                    
                                    </div>

                                    <FormControl>
                                        <Input {...field}
                                            type="text"
                                            className="border w-[20rem] border-gray-200"
                                            placeholder="add comment here..."
                                        />
                                    </FormControl>
                                </div>

                                <FormMessage />
                            </FormItem>
                        )}
                    />



                    <Button type="submit" className="rounded px-2 bg-white text-gray-700">
                        save
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default CreateCommentForm