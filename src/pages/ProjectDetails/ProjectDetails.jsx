import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { PlusIcon } from 'lucide-react'
import InviteUserForm from './InviteUserForm'

const ProjectDetails = () => {
    const handleProjectInviatation = () => {

    };

    return (
        <div className='mt-5 lg:px-10'>
            <div className='lg:flex gap-5 justify-between pb-4'>
                <ScrollArea className="h-screen lg:w-[69%] pr-2">
                    <div className='text-gray-400 pb-10 w-full'>
                        <h1 className='text-lg font-semibold pb-5'>
                            Create Ecommerce using react
                        </h1>
                        <div className='space-y-5 pb-10'>
                            <p className='w-full md:max-w-lg lg:max-w-xl text-sm'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </p>

                            <div className='flex'>
                                <p className='w-36'>Project Lead : </p>
                                <p>Ansh</p>
                            </div>
                            <div className='flex'>
                                <p className='w-36'>Membes : </p>
                                <div className='flex items-center gap-2'>

                                    {[1,2,3,4].map((item) => <Avatar className="cursor-pointer" key={item}>
                                        <AvatarFallback className="bg-slate-800">
                                            A
                                        </AvatarFallback>
                                        </Avatar>)}
                                    
                                </div>
                                
                                <Dialog>
                                    <DialogTrigger>
                                        <DialogClose>
                                            <Button size="sm" variant="outline" onClick={handleProjectInviatation} className="rounded px-2 ml-3 bg-inherit text-gray-500 hover:bg-slate-800">
                                                
                                                <span className='px-1 py-2'>invite</span>
                                                <PlusIcon className='w-3 h-3' />
                                        
                                            </Button>
                                        </DialogClose>
                            
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>Invite User</DialogHeader>
                                        <InviteUserForm />
                                    </DialogContent>
                                </Dialog>
                                
                            </div>

                            <div className='flex'>
                                <p className='w-36'>Category</p>
                                <p>Fullstack</p>
                            </div>

                            <div className='flex'>
                                <p className='w-36'>Project Lead : </p>
                                <Badge className="bg-white text-black hover:text-white">Ansh</Badge>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}

export default ProjectDetails