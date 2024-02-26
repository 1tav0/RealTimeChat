
const Message = () => {
  return (
    <div className="flex flex-col">
      <div className="chat chat-end">
        <div className="chat-header">
          Obi-Wan Kenobi
        </div>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="/cr7.jpg" alt="avatar" />
          </div>
        </div>
        <div className="chat-bubble text-white">
          Hi, wassup!
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
      </div>

      <div className="chat chat-start">
        <div className="chat-header">
          Obi-Wan Kenobi
        </div>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="/cr7.jpg" alt="avatar" />
          </div>
        </div>
        <div className="chat-bubble text-white">
          Hi, wassup!
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
      </div>
    </div>
  )
}

export default Message