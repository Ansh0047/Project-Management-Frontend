import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const UserList = () => {
    return (
        <>
            <div className="space-y-2 mb-2">
                <div className="py-1 group hover:bg-slate-800 cursor-pointer flex
        items-center space-x-4 rounded-md border border-gray-700 px-4">
                    <p className="px-3 py-2">{"Ram" || "Unassigned"}</p>
                </div>
            </div>
            {[1,2,3,4].map((item) => <div key={item} className="py-1 group hover:bg-slate-800 cursor-pointer flex
                items-center space-x-4 rounded-md border border-gray-700 px-4">
                <Button size="icon"
                    className="bg-gray-900 hover:bg-white hover:text-black text-white rounded-full">
                    <Avatar>
                        <AvatarFallback>
                            A
                        </AvatarFallback>
                    </Avatar>
                </Button>

                <div className="space-y-1">
                    <p className="text-sm leading-none">Ansh</p>
                    <p className="text-sm text-muted-foreground">@ansh</p>
                </div>
            </div>)}
        </>
    )
}

export default UserList