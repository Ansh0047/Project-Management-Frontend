import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PaperPlaneIcon } from "@radix-ui/react-icons"
import { useState } from "react"

const ChatBox = () => {
  const [message,setMessage] = useState("");

  const handleSendMessage = () => {
    console.log("message", message);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="sticky">
      <div className="border border-gray-800 rounded-lg">

        <h1 className="border-b border-gray-800  p-5">Chat Box</h1>

        <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col">

          {[1, 2, 3, 4].map((item,index) =>
            (index%2==0) ? <div key={item} className="flex gap-2 mb-2 justify-start">
              <Avatar className="bg-gray-800 text-gray-100">
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div className="space-y-2 py-2 px-5 border border-gray-700 rounded-ss-2xl rounded-e-xl">
                <p>Ansh</p>
                <p className="text-gray-300">How are you</p>
              </div>
            </div> :
              <div key={item} className="flex gap-2 mb-2 justify-end">
                
                <div className="space-y-2 py-2 px-5 border border-gray-700 rounded-se-2xl rounded-s-xl">
                  <p>Ansh</p>
                  <p className="text-gray-300">How are you</p>
                </div>
                <Avatar className="bg-gray-800 text-gray-100">
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
              </div>)}

        </ScrollArea>

          
        <div className="relative p-0">
            <Input 
            placeholder="type message..."
            className="py-7 border-t outline-none focus:outline-none
            focus:ring-0 rounded-none border-gray-800 border-x-0"
            value={message} onChange={handleMessageChange}
            />

            <Button onClick={handleSendMessage} className="absolute right-2
            top-3 rounded-full hover:bg-accent hover:text-accent-foreground pt-2" size="icon">
              <PaperPlaneIcon />
            </Button>
        </div>
      </div>
    </div>
  )
}

export default ChatBox