import Category from "../Models/CategoryModel.js";
import Product from "./../Models/ProductModel.js";

import express from "express";
import asyncHandler from "express-async-handler";
import { protect, admin } from "../Middleware/AuthMiddleware.js";

const categoryRoute = express.Router();

// GET ALL CATEGORIES
categoryRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const query = req.query.new;
    try {
      const category = query
        ? await Category.find()
            .sort({ _id: -1 })
            .populate("product", "id name")
            .limit(1)
        : await Category.find();
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json(error);
    }
  })
);

//ADMIN - GET ALL CATEGORIES
categoryRoute.get(
  "/all",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const categories = await Category.find({})
      .sort({ _id: -1 })
      .populate("product", "id name");
    res.json(categories);
  })
);

// GET SINGLE CATEGORY
categoryRoute.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id.trim());
    if (category) {
      res.json(category);
    } else {
      res.status(404);
      throw new Error("Category Not Found");
    }
  })
);

// CREATE CATEGORY
categoryRoute.post(
  "/",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const { type, published, description } = req.body;
    const categoryExist = await Category.findOne({ type });
    if (!type || !description) {
      res.status(400);
      throw new Error("Please fill in all required fields");
    }
    if (categoryExist) {
      res.status(400);
      throw new Error("Category name already exists");
    } else {
      const category = new Category({
        type,
        published,
        description,
      });
      if (category) {
        const createdCategory = await category.save();
        res.status(201).json(createdCategory);
      } else {
        res.status(400).json(createdCategory);
        throw new Error("Invalid category data");
      }
    }
  })
);

// UPDATE CATEGORY
categoryRoute.put(
  "/:id",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const { type, description, published } = req.body;
    const category = await Category.findById(req.params.id);
    if (category) {
      category.type = type || category.type;
      category.published = published || category.published;
      category.description = description || category.description;

      const updatedCategory = await category.save();
      res.json(updatedCategory);
    } else {
      res.status(404);
      throw new Error("Category Not Found");
    }
  })
);

// DELETE CATEGORY
categoryRoute.delete(
  "/:id",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
    const { id } = req.params;
    try {
      await Category.findByIdAndRemove(id);
      await Product.remove({ '_id': category.product }, { $pull: { category: category._id } });

      res.status(201).json({ message: "Category Deleted" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  })
);

export default categoryRoute;
