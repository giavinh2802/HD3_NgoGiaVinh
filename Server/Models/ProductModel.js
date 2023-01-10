import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    reviews: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      // required: true,
      unique: true,
      lowercase: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      // required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    brand: {
      type: String,
      // required: true,
    },
    option: {
      color: [{ type: String }],
      size: [{ type: String }],
    },
    description: {
      type: String,
      required: true,
      maxLength: 600,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      // required: true,
      default: 0,
    },
    // sold:{
    //   type: Number,
    //   default: 0,
    // }
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export const Review = mongoose.model("Review", reviewSchema);

export default Product;
