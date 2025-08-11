import mongoose, { mongo, Schema } from "mongoose";
const messageSchema = new Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", //this says that the sender id will be from the user collection
        required: true,
    },
    recieverId: {
         type: mongoose.Schema.Types.ObjectId,
        ref: "User", //this says that the sender id will be from the user collection
        required: true,
    },
    message: {
        type: String,
        required: true
    }
    //createdAt, updatedAt => message.createdAt : 15:30 12/12/2020
}, {timestamps: true});

const Message = mongoose.model("Message", messageSchema);
export default Message;