const { Schema, model } = require("mongoose");
const towsub_categorySchema = new Schema({
    towsubcategory_name: {
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
    subcategory_id: {
        type: String,
        trim: true,
    },
});
const SubCategoryTow = model("SubCategoryTow", towsub_categorySchema);
module.exports = SubCategoryTow;
