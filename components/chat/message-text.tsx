import { ReactNode } from "react"

type MessageTextProps = {
    children:ReactNode
}

const MessageText = ({children}:MessageTextProps) => {
  return (
    <div className="bg-accent px-4 py-3 rounded-xl text-sm leading-6">
        {children}
    </div>
  )
}

export default MessageText