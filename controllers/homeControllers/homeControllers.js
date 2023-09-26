const axios = require("axios");
const app = {};
const Product = require("../../models/productModel/porduct_model");
const Category = require("../../models/categorysModel/category_model");
app.homeController = async (req, res, next) => {
    try {
        const categorys = await Category.find({});
        const product = await Product.find({ status: "ACTIVE" }).sort({
            _id: -1,
        });
        console.log(categorys);
        return res.status(200).render("index", {
            title: "Hompage - Online Shoping in Bnagladesh ",
            product,
            categorys,
            open: "open",
        });
        // res.status(200).json(porduct);
    } catch (error) {
        next(error);
    }
};

module.exports = app;
