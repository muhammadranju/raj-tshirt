const { Schema, model } = require("mongoose");
const sub_categorySchema = new Schema({
    subcategory_name: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        lowercase: true,
        required: true,
    },
    category_id: {
        type: String,
        trim: true,
    },
    // category_name: {
    //     type: String,
    //     trim: true,
    // },
});
const SubCategory = model("SubCategory", sub_categorySchema);
module.exports = SubCategory;
