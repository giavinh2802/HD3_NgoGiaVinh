import mongoose from "mongoose";

const couponSchema = new mongoose.Schema(
  {
    index: { type: String, minlength: 4 },
    name: { type: String, minlength: 4 },
    code: { type: String, minlength: 4 },
    validityTime: { type: Date },
    percentage: { type: Number, min: 1 },
    minAmount: { type: Number, min: 5000 },
    type: { type: String, minlength: 4 },
  },
  { timestamps: true }
);

const Coupon = mongoose.model("Coupon", couponSchema);
export default Coupon;
