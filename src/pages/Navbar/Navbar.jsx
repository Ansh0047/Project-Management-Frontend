import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import CreateProjectForm from '../Project/CreateProjectForm'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { PersonIcon } from '@radix-ui/react-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='border-b py-5 px-5 flex items-center justify-between border-gray-700'>
            <div className='flex items-center gap-5'>
                <p onClick={() => navigate("/")} className='cursor-pointer'>Project Management</p>
                <Dialog>
                    <DialogTrigger>
                        <Button variant="ghost">New Project</Button>
                    </DialogTrigger>

                    <DialogContent className="bg-zinc-950">
                        <DialogHeader>Create New Project</DialogHeader>
                        <CreateProjectForm />
                    </DialogContent>
                </Dialog>
                <Button onClick={() => navigate("/upgrade_plan")} variant="ghost">Upgrade</Button>
            </div>

            <div className='flex items-center gap-3'>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant="outline" size="icon" className="rounded-full border-2 border-gray-500">
                            <PersonIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <p>AK</p>
            </div>
        </div>
    )
}

export default Navbar