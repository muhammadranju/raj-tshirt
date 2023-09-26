const { Schema, model } = require("mongoose");
const moment = require("moment");
const CommentSchma = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        product_id: {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
        comment: {
            type: String,
            trim: true,
        },
        date: {
            type: String,
            default: moment().format("L"),
        },
        time: {
            type: String,
            default: moment().format("LTS"),
        },
    },
    { timestamps: true }
);
const Comment = model("Comment", CommentSchma);
module.exports = Comment;
