import nodemailer from "nodemailer";

import express from "express";
import User from "./../Models/UserModel.js";
import jwt from "jsonwebtoken";
import { protect } from "../Middleware/AuthMiddleware.js";

const pwdRouter = express.Router();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

pwdRouter.post("/", async (req, res) => {
  console.log(req.body);

  const { email } = req.body;

  if (!email) {
    res.status(401).json({ status: 401, message: "Enter Your Email" });
  }

  try {
    const userfind = await User.findOne({ email: email });
    console.log(userfind);

    //token generate for reset password
    const token = jwt.sign({ _id: userfind._id }, process.env.JWT_SECRET, {
      expiresIn: "120s",
    });
    console.log(token);
    const setusertoken = await User.findByIdAndUpdate(userfind._id, token);

    if (setusertoken) {
      const mailOptions = {
        from: `PandaSneakerShop 🛍️ <${process.env.USER}>`,
        to: email,
        subject: "Email For Password Reset",
        html: `
          <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
          <div style="max-width: 700px; background-color: white; margin: 0 auto">
            <div style="width: 100%; background-color: #349eff; padding: 20px 0">
              <a href="${process.env.CLIENT_URL}">
                <img
                  src="https://res.cloudinary.com/drdfg8wp1/image/upload/v1670389884/LogoSneaker_o0pmhg.png"
                  style="width: 100%; height: 70px; object-fit: contain"
                />
              </a>
            </div>
            <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
              <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
                Link For Reset Password !!!
              </p>
              <p style="font-weight: 700; font-size: 1rem; padding: 0 30px">
                This link is valid for 2 minutes http://localhost:3000/password-reset/${userfind.id}/${setusertoken.verifytoken}
              </p>
              <div style="font-size: .8rem; margin: 0 30px">
                <p>
                  Your Email: <b>${email}</b>
                </p>
              </div>
            </div>
          </div>
        </div>;
        `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("error", error);
          res.status(401).json({ status: 401, message: "email not send" });
        } else {
          console.log("Email sent", info.response);
          res
            .status(201)
            .json({ status: 201, message: "Email sent Succsfully" });
        }
      });
    }
  } catch (error) {
    res.status(401).json({ status: 401, message: "invalid user" });
  }
});

// pwdRouter.post(
//   "/",
//   protect,
//   asyncHandler(async (req, res) => {
//     const { email } = req.body;
//     if (!email) {
//       res.status(401).json({ msg: "Enter Your Email" });
//     }

//     try {
//       const userfind = await User.findOne({ email });

//       const token = jwt.sign({ id }, process.env.JWT_SECRET, {
//         expiresIn: "120s",
//       });
//       if (userfind) {
//         const setusertoken = await User.findByIdAndUpdate(req.user._id);
//         if (setusertoken) {
//           res.json({
//             _id: userfind._id,
//             password: userfind.password,
//           });
//         }
//       }

//     } catch (error) {
//       res.status(401).json({ status: 401, message: "Invalid User" });
//     }
//   })
// );

export default pwdRouter;
