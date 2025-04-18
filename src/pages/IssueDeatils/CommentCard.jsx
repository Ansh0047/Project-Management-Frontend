import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Trash2Icon, TrashIcon } from "lucide-react"

const CommentCard = () => {
    return (
        <div className="flex justify-between w-[24rem]">
            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarFallback className="bg-slate-800">A</AvatarFallback>
                </Avatar>

                <div className="space-y-1">
                    <p>Code with Ansh</p>
                    <p>How much work is pending</p>
                </div>
            </div>
            <Button className="rounded-full hover:bg-accent hover:text-accent-foreground" size="icon">
                <TrashIcon />
            </Button>
        </div>
    )
}

export default CommentCard