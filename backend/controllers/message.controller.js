import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const { senderId } = req.user;

    // find a conversation between this two users
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
    })

    // if there is no conversation then make a new one
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId]
      })
    }
    //we create a new message 
    const newMessage = new Message.create({
      senderId,
      receiverId,
      message
    })
    // if new message is created we push it to the messages array
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // respond with the new message created
    res.status(201).json(newMessage);

  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}