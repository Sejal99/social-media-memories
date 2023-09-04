import mongoose from "mongoose";

//create mongoose schema
const PostSchema=mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
});

//now convert this schema into model

const PostMessage=mongoose.model('PostMessage',PostSchema);

export default PostMessage;