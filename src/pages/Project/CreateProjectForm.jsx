import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form'
import { tags } from '../ProjectList/ProjectList';
import { Cross1Icon } from '@radix-ui/react-icons';

const CreateProjectForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      tags: []
    }
  });

  const onSubmit = (data) => {
    console.log("create project data", data);
  };

  const handleTagsChange = (newValue) => {
    const currentTags = form.getValues("tags");
    const updateTags = currentTags.includes(newValue)?
    currentTags.filter(tag => tag!==newValue):[...currentTags,newValue];

    form.setValue("tags",updateTags);
  };

  return (
    <div>
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => <FormItem>
              <FormControl>
                <Input {...field}
                  type="text"
                  className="border w-full border-gray-200 py-5 px-5 mb-5"
                  placeholder="project name ..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>}
          />
          <FormField control={form.control}
            name="description"
            render={({ field }) => <FormItem>
              <FormControl>
                <Input {...field}
                  type="text"
                  className="border w-full border-gray-200 py-5 px-5 mb-5"
                  placeholder="project description ..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>}
          />

          <FormField control={form.control}
            name="category"
            render={({ field }) => <FormItem>
              <FormControl>
                <Select
                  defaultValue='fullstack'
                  value={field.value}
                  onValueChange={(value) => { field.onChange(value) }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Catergory" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fullstack">Full Stack</SelectItem>
                    <SelectItem value="frontend">Frontend</SelectItem>
                    <SelectItem value="backend">Backend</SelectItem>
                  </SelectContent>
                </Select>

              </FormControl>
              <FormMessage />
            </FormItem>}
          />

          <FormField control={form.control}
            name="tags"
            render={({ field }) => <FormItem>
              <FormControl>
                <Select
                  onValueChange={(value) => { handleTagsChange(value) }}
                >
                  <SelectTrigger className="w-full mt-5">
                    <SelectValue placeholder="Tags" />
                  </SelectTrigger>
                  <SelectContent>
                    {tags.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
                  </SelectContent>
                </Select>

              </FormControl>
              <div className='flex gap-1 flex-wrap'>

                {field.value.map((item) => <div onClick={() => handleTagsChange(item)}
                  className='px-2 cursor-pointer flex rounded-xl items-center border gap-2 py-1'>
                  <span className='text-sm'>{item}</span>
                  <Cross1Icon className='h-3 w-3' />
                </div>)}

              </div>
              <FormMessage />
            </FormItem>}
          />

          <DialogClose>
            {false ? <div><p>you can create only 3 projects with free plan,
              please upgrade your plan</p></div> : <Button type="submit" className="w-full mt-5 px-4 py-2 bg-white text-black border border-gray-300 hover:bg-gray-100">
              Create Project</Button>}
          </DialogClose>
        </form>
      </Form>
    </div>
  )
}

export default CreateProjectForm