import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom"
import CreateCommentForm from "./CreateCommentForm";
import CommentCard from "./CommentCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const IssueDetails = () => {
    const { projectId, issueId } = useParams();

    const handleUpdateIssueStatus = (status) => {
        console.log(status);
    }

    return (
        <div className="px-20 py-8 text-gray-400">
            <div className="flex justify-between border p-10 rounded-lg">

                <ScrollArea className="h-[80vh] w-[60%]">
                    <div className="py-5">
                        <h2 className="font-semibold text-gray-400">Description</h2>
                        <p className="text-gray-400 text-sm mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                    <div className="mt-5">
                        <h1 className="pb-3">Activity</h1>
                        <Tabs defaultValue="comments" className="w-full">
                            <TabsList className="space-x-4 bg-gray-400 mb-3">
                                <TabsTrigger
                                    value="all"
                                    className="tab-btn pb-2 border-transparent text-black hover:bg-slate-950 hover:text-gray-400 
                                    transition-all data-[state=active]:border-black data-[state=active]:text-gray-400 data-[state=active]:bg-slate-950 font-medium"
                                >
                                    All
                                </TabsTrigger>

                                <TabsTrigger
                                    value="comments"
                                    className="tab-btn pb-2 border-transparent text-black hover:bg-slate-950 hover:text-gray-400 
                                    transition-all data-[state=active]:border-black data-[state=active]:text-gray-400 data-[state=active]:bg-slate-950 font-medium"
                                >
                                    Comments
                                </TabsTrigger>

                                <TabsTrigger
                                    value="history"
                                    className="tab-btn pb-2 border-transparent text-black hover:bg-slate-950 hover:text-gray-400 
                                    transition-all data-[state=active]:border-black data-[state=active]:text-gray-400 data-[state=active]:bg-slate-950 font-medium"
                                >
                                    History
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="all">
                                all - Make changes to your account here
                            </TabsContent>

                            <TabsContent value="comments">
                                <CreateCommentForm issueId={issueId} />
                                <div className="mt-8 space-y-6">
                                    {[1, 2, 3].map((item) => <CommentCard key={item} />)}
                                </div>
                            </TabsContent>

                            <TabsContent value="history" >
                                history change
                            </TabsContent>
                        </Tabs>

                    </div>
                </ScrollArea>

                <div className="w-full lg:w-[30%] space-y-2">
                    <Select onValueChange={handleUpdateIssueStatus}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="To Do" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="pending">To Do</SelectItem>
                            <SelectItem value="in_progress">In Progress</SelectItem>
                            <SelectItem value="done">Done</SelectItem>
                        </SelectContent>
                    </Select>

                    <div className="border border-gray-800 rounded-lg">
                        <p className="border-b border-gray-800 py-3 px-5">Details</p>

                        <div className="p-5">
                            <div className="space-y-7">
                                <div className="flex gap-10 items-center">

                                    <p className="w-[7rem]">Assignee</p>
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8 text-xs">
                                            <AvatarFallback className="bg-slate-800">A</AvatarFallback>
                                        </Avatar>
                                        <p>Ansh</p>
                                    </div>
                                </div>

                                <div className="flex gap-10 items-center">

                                    <p className="w-[7rem]">Labels</p>
                                    <p>None</p>
                                </div>

                                <div className="flex gap-10 items-center">

                                    <p className="w-[7rem]">Status</p>
                                    <Badge className="bg-gray-50 text-gray-600">
                                        in_progress
                                    </Badge>
                                </div>

                                <div className="flex gap-10 items-center">

                                    <p className="w-[7rem]">Release</p>
                                    <p>19-4-2025</p>
                                </div>

                                <div className="flex gap-10 items-center">

                                    <p className="w-[7rem]">Reporter</p>
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8 text-xs">
                                            <AvatarFallback className="bg-slate-800">A</AvatarFallback>
                                        </Avatar>
                                        <p>Ansh</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default IssueDetails