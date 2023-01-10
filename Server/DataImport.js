import express from "express";
import asyncHandler from "express-async-handler";
import User from "./Models/UserModel.js";
import users from "./data/users.js";
import Product from "./Models/ProductModel.js";
import products from "./data/Products.js";
import Category from "./Models/CategoryModel.js";
import categories from "./data/Categories.js"

const ImportData = express.Router();

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.remove({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

ImportData.post(
  "/products",
  asyncHandler(async (req, res) => {
    await Product.remove({});
    const importProducts = await Product.insertMany(products);
    res.send({ importProducts });
  })
);

ImportData.post(
  "/categories",
  asyncHandler(async (req, res) => {
    await Category.remove({});
    const importCategories = await Category.insertMany(categories);
    res.send({ importCategories });
  })
)

export default ImportData;
