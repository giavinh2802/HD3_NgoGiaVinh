import mongoose from "mongoose";
import Coupon from "../Models/CouponModel.js";
import express from "express";
import asyncHandler from "express-async-handler";
import { protect, admin } from "../Middleware/AuthMiddleware.js";
import { endDateCheck } from "../utils/dateEndCheck.js";

const couponRoute = express.Router();

// GET ALL COUPONS
couponRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const pageSizeC = 6;
    const pageC = Number(req.query.pageNumber) || 1;
    const keywordC = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const count = await Coupon.countDocuments({ ...keywordC });
    const coupons = await Coupon.find({})
      .limit(pageSizeC)
      .skip(pageSizeC * (pageC - 1))
      .sort({ _id: -1 });
    res.json({ coupons, pageC, pagesC: Math.ceil(count / pageSizeC) });
  })
);

//ADMIN - GET ALL CATEGORIES
couponRoute.get(
  "/all",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const coupons = await Coupon.find({}).sort({ _id: -1 });
    res.json(coupons);
  })
);

// GET ONE COUPON
couponRoute.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const coupon = await Coupon.findById(req.params.id);
    if (coupon) {
      res.json(coupon);
    } else {
      res.status(404);
      throw new Error("Coupon Not Found");
    }
  })
);

//CREATE COUPON
couponRoute.post(
  "/",
  // endDateCheck,
  protect,
  admin,
  asyncHandler(async (req, res) => {
    let time = new Date();
    time.setDate(time.getDate() + req.body.validityTime);
    time.toDateString();
    const { index, name, code, validityTime, percentage, minAmount, type } =
      req.body;

    const coupon = new Coupon({
      index,
      name,
      code,
      validityTime,
      percentage,
      minAmount,
      type,
    });

    if (coupon) {
      const createdCoupon = await coupon.save();
      res.status(201).json(createdCoupon);
    } else {
      res.status(400).json(createdCoupon);
      throw new Error("Invalid coupon data");
    }
  })
);

// UPDATE COUPON
couponRoute.put(
  "/:id",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    const { index, name, code, validityTime, percentage, minAmount, type } =
      req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const updateCoupon = {
      _id: id,
      index,
      name,
      code,
      percentage,
      validityTime,
      minAmount,
      type,
    };

    await Coupon.findByIdAndUpdate(id, updateCoupon, { new: true });

    res.status(200).json(updateCoupon);
  })
);

// DELETE COUPON
couponRoute.delete(
  "/:id",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    await Coupon.findByIdAndRemove(id);

    res.status(201).json({ message: "Deleted Successfully!" });
  })
);

export default couponRoute;
