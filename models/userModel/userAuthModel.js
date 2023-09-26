const { Schema, model } = require("mongoose");
const moment = require("moment");
const shortId = require("shortid");

const userAuthModel = new Schema({
    userId: {
        type: String,
        default: shortId.generate(),
    },
    username: {
        type: String,
        default: Date.now(),
    },
    fristName: {
        type: String,
        required: [true, "Name is required."],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "Name is required."],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        trim: true,
    },
    gander: {
        type: String,
        lowercase: true,
        enum: ["male", "female", "other"],
        required: [true, "Gander is required."],
    },
    tc: {
        type: Boolean,
        required: [true, "Terms & Conditions is required."],
    },
    user_status: {
        type: String,
        enum: ["active", "inactive", "suspend"],
        default: "active",
    },
    
    comment_id: {
        ref: "Comment",
        type: Schema.Types.ObjectId,
    },
    user_favorite: {
        ref: "",
        type: Schema.Types.ObjectId,
    },
    date: {
        type: String,
        default: moment().format("L"),
    },
    time: {
        type: String,
        default: moment().format("LTS"),
    },
});

const UserModel = model("User", userAuthModel);
module.exports = UserModel;
