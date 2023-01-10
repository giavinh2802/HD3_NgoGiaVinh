import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    type: { type: String,required: [true,"Please add a type name !"] },
    published: { type: Boolean, default: true },
    description: { type: String, required: [true,"Please add a description !"] },
    product: {
      // required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);
export default Category;
