const Product = require("../../models/productModel/porduct_model");
const Category = require("../../models/categorysModel/category_model.js");
const SubCategory = require("../../models/categorysModel/sub_category_model");
const SubCategoryTow = require("../../models/categorysModel/towsub_category_model");
const Error = require("../../utils/throwError");
const path = require("path");

const getProductByIdController = async (req, res, next) => {
    try {
        const { productId } = req.params;

        const singleProduct = await Product.findOne({
            short_title: productId,
            // _id: productId,
        })
            .populate("category_id")
            .populate("subCategory_id")
            .populate("subCategorytwo_id");
        if (!singleProduct) {
            return res.redirect("/product");
        }
        const a = singleProduct.product_price;
        const b = singleProduct.special_price;

        console.log(((90 - 250) / 60) * 100);
        // console.log((b / a) * 100);

        console.log(singleProduct.product_price);
        console.log(singleProduct.special_price);
        return res
            .status(200)
            .render("pages/product/single-product/product-details", {
                title: singleProduct.title_name,
                singleProduct,
                open: "",
            });
        console.log(singleProduct.category);
        // res.json(singleProduct);
    } catch (error) {
        next(error);
        // console.log(error);
    }
};

const getProductController = async (req, res, next) => {
    try {
        // const categorys = await Category.find({});
        const product = await Product.find({})
            .populate("category_id")
            .populate("subCategory_id")
            .populate("subCategorytwo_id");
        if (!product) {
            return res.redirect("/");
        }

        return res
            .status(200)
            .render("pages/product/product-home/product-home", {
                title: "Products",
                product,
                url: req.baseUrl.split("/")[1],
                open: "",
            });
    } catch (error) {
        next(error);
        // console.log(error);
    }
};
module.exports = {
    getProductController,
    getProductByIdController,
};
