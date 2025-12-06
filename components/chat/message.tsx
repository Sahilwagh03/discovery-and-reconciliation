import { MessageProps } from "@/interfaces/chat.interface"
import { cn } from "@/lib/utils"
import MessageAvatar from "./message-avatar"
import { MESSAGE_SENDER } from "@/constant/chatConstants"
import MeassageContent from "./message-content"


const Message = ({message}:MessageProps) => {
  return (
    <div className={cn("flex gap-3 items-start" , message.sender === MESSAGE_SENDER.USER && "flex-row-reverse")}>
      <MessageAvatar sender={message.sender}/>
      <MeassageContent message={message}/>
    </div>
  )
}

export default Message