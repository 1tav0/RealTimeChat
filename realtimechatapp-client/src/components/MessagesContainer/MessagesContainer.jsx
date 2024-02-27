import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { TiMessages } from "react-icons/ti";

const MessagesContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  
  //to unmount when component not in dom to reset picked selectedConversation this will mount depending on the selected conversation 
  useEffect(() => {
    //clean up function (unmounts)
    return () => setSelectedConversation(null);
  },[setSelectedConversation])
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {
        !selectedConversation ? 
          (
            <NoChatSelected />
          )
          :
          (
            <>
              {/* Header */}
              <div className="bg-slate-500 px-4 py-2 mb-2"> 
                <span className="label-text">to: </span>
                <span className="text-gray-900 font-bold">{ selectedConversation.fullName }</span>
              </div>
              <Messages />
              <MessageInput />
            </>
          )
      }
    </div>
  )
}

export default MessagesContainer

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center">
        <p>Welcome 👋 1tav0 ❄️</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl"/>
      </div>
    </div>
  )
}

