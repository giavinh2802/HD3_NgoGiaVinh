import express from "express";
import asyncHandler from "express-async-handler";
import Product from "./../Models/ProductModel.js";
import Category from "./../Models/CategoryModel.js";

import { protect, admin } from "../Middleware/AuthMiddleware.js";
import slugify from "slugify";

const productRoute = express.Router();

// GET ALL PRODUCT
productRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const pageSize = 6;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: -1 })
      .populate("category", "id type published description");
    res.json({ products, page, pages: Math.ceil(count / pageSize) });
  })
);

//ADMIN - GET ALL PRODUCT
productRoute.get(
  "/all",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
      .sort({ _id: -1 })
      .populate("category", "id type published description");
    res.json(products);
  })
);

//GET SINGLE PRODUCT
productRoute.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }
  })
);

//REVIEW PRODUCT
productRoute.post(
  "/:id/review",
  protect,
  asyncHandler(async (req, res) => {
    const { rating, comment } = req.body;
    const product = await Product.findById(req.params.id);

    if (product) {
      const alreadyReviewed = product.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
      );
      if (alreadyReviewed) {
        res.status(400);
        throw new Error("Product already Reviewed");
      }
      const review = {
        name: req.user.name,
        rating: Number(rating),
        comment,
        user: req.user._id,
      };

      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;

      await product.save();
      res.status(201).json({ message: "Reviewed Added" });
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }
  })
);

//DELETE PRODUCT
productRoute.delete(
  "/:id",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    const { id } = req.params;
    if (product) {
      await product.remove();
      await Category.remove({ '_id': product.category }, { $pull: { product: product._id } });
      res.json({ message: "Product Deleted" });
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }
  })
);

//CREATE PRODUCT
productRoute.post(
  "/",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const {
      name,
      slug,
      price,
      description,
      image,
      countInStock,
      category,
      color,
      size,
    } = req.body;
    const productExist = await Product.findOne({ name });
    if (productExist) {
      res.status(400);
      throw new Error("Product name already exists");
    } else {
      if (req.body.name) {
        req.body.slug = slugify(req.body.name);
      }
      const product = new Product({
        name,
        slug,
        price,
        description,
        option: {
          color,
          size,
        },
        category,
        image,
        countInStock,
        user: req.user._id,
      });
      if (product) {
        if (req.body.name) {
          req.body.slug = slugify(req.body.name);
        }
        const createdProduct = await product.save();

        res.status(201).json(createdProduct);
      } else {
        res.status(400).json(createdProduct);
        throw new Error("Invalid product data");
      }
    }
  })
);

//UPDATE PRODUCT
productRoute.put(
  "/:id",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const {
      name,
      price,
      description,
      image,
      countInStock,
      category,
      color,
      size,
    } = req.body;
    const product = await Product.findById(req.params.id);
    if (product) {
      product.name = name || product.name;
      product.price = price || product.price;
      product.description = description || product.description;
      product.image = image || product.image;
      product.countInStock = countInStock || product.countInStock;
      product.category = category || product.category;
      product.color = color || product.color;
      product.size = size || product.size;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }
  })
);

export default productRoute;
