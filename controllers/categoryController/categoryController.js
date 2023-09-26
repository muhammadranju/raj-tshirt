const Category = require("../../models/categorysModel/category_model");
const SubCategory = require("../../models/categorysModel/sub_category_model");
const SubCategoryTow = require("../../models/categorysModel/towsub_category_model");
const Product = require("../../models/productModel/porduct_model");
async function categoryss(catid) {
    return await SubCategory.find({ category_id: catid });
}

const categoryGetController = async (req, res, next) => {
    try {
        const categorys = await Category.find();
        // const product = await Product.findOne({});

        return res.status(200).json(categorys);
    } catch (error) {
        next(error);
    }
};
const categoryGetByIdController = async (req, res, next) => {
    try {
        // const { catid } = req.query;
        const { catid } = req.params;
        // const category = await SubCategory.find({ category_id: catid });
        const product = await Product.find({ category: catid })
            .populate("category_id")
            .populate("subCategory_id")
            .populate("subCategorytwo_id");

        // console.log(category);
        if (!product.length > 0) {
            return res.status(200).render("pages/not-available/not-available", {
                title: "Not Available",
                product,
                url: req.baseUrl.split("/")[1],
                open: "",
                category: await categoryss(catid),
            });
        }

        return res
            .status(200)
            .render("pages/product/category-product/category-product", {
                title: "Category",
                product,
                url: req.baseUrl.split("/")[1],
                open: "",
                category: await categoryss(catid),
            });
        // return res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};
const categorySubGetByIdController = async (req, res, next) => {
    try {
        // const { catid } = req.query;
        const { catid } = req.params;
        const category = await SubCategoryTow.find({ subcategory_id: catid });
        const product = await Product.find({ sub_category: catid })
            .populate("category_id")
            .populate("subCategory_id")
            .populate("subCategorytwo_id");
        return res
            .status(200)
            .render("pages/product/category-product/sub-category-product", {
                title: "Category",
                product,
                url: req.baseUrl.split("/")[1],
                open: "",
                category,
            });
        // return res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};
const categorySubTwoGetByIdController = async (req, res, next) => {
    try {
        // const { catid } = req.query;

        const { catid } = req.params;
        const category = await SubCategoryTow.find();
        const product = await Product.find({
            sub_categorytwo: catid,
        })
            .populate("category_id")
            .populate("subCategory_id")
            .populate("subCategorytwo_id");
        return res
            .status(200)
            .render("pages/product/category-product/sub-category-two-product", {
                title: "Category",
                product,
                url: req.baseUrl.split("/")[1],
                open: "",
                category,
            });
        // return res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    categoryGetByIdController,
    categoryGetController,
    categorySubGetByIdController,
    categorySubTwoGetByIdController,
};
