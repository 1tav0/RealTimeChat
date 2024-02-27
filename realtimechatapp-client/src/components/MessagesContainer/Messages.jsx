import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../Skeletons/MessageSkeleton";
import Message from "./Message";
const Messages = () => {
  const { loading, messages } = useGetMessages();
  console.log(messages);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {
        // if is loading use the skeleton component 3 times
        loading && [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)
      }

      {
        !loading && messages.length > 0 && messages.map(message => (
          <Message
            key={message._id}
            message={message}
          />
        ))
      }

      {
        !loading && messages.length === 0 && (
          <p className="text-center">Send a message to start the conversation</p>
        )
      }
    </div>
  )
}

export default Messages