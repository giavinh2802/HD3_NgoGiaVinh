import mongoose from "mongoose";
import Review from "../Models/ProductModel.js";
import express from "express";
import asyncHandler from "express-async-handler";
import { protect, admin } from "../Middleware/AuthMiddleware.js";
// import productRoute from "./ProductRoutes.js";

const reviewRoute = express.Router();

//ADMIN - GET ALL REVIEWS
reviewRoute.get(
  "/all",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const reviews = await Review.find({}).sort({ _id: -1 });
    res.json(reviews);
  })
);

// DELETE REVIEW
// reviewRoute.delete(
//   "/:id",
//   protect,
//   admin,
//   asyncHandler(async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id))
//       return res.status(404).send(`No post with id: ${id}`);

//     await Review.findByIdAndRemove(id);

//     res.status(201).json({ message: "Deleted Successfully!" });
//   })
// );
