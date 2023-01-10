import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRouter from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Error.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/OrderRoutes.js";
import categoryRouter from "./Routes/CategoryRoutes.js";
import couponRouter from "./Routes/CouponRoutes.js";
// import reviewRouter from "./Routes/ReviewRoutes.js";
import cors from "cors";
// import morgan from "morgan";

// import userRouter1 from "./Middleware/Mail/ForgotPwd.js";
// import EmailPwdSender from "./Routes/ForgotPwd.js";
import pwdRouter from "./Routes/ForgotPwd.js";

import EmailRegisterSender from "./Middleware/Mail/SendEmailRegister.js";

dotenv.config();
connectDatabase();

const app = express();
app.use(express.json());
// app.use(cors({ origin: `${process.env.PORT}` }));
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
// app.use(morgan("dev"));

//API
app.use("/api/import", ImportData);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/coupons", couponRouter);
app.use("/api/reviews", productRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// ****** SEND API
app.post("/registersend", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    EmailRegisterSender({ name, email, phone });
    res.json({ msg: "Sign up successfully" });
  } catch (error) {
    res.status(404).json({ msg: "Error ❌" });
  }
});

//RESET PASSWORD
app.use("/sendpwdlink", pwdRouter);

//ERROR
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`Server run in port ${PORT}`));
