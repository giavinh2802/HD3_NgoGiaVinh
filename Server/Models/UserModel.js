import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = mongoose.Schema(
  {
    avatar: { type: String, default: "" },
    name: {
      type: String,
      required: [true],
      minLength: [4, "User name must be up to 4 characters"],
      maxLength: [40, "User name must not be more than 40 characters"],
    },
    email: {
      type: String,
      required: [true],
      unique: true,
      minLength: [12, "Email must be up to 12 characters"],
    },
    phone: { type: String, unique: true },
    password: {
      type: String,
      required: [true],
      minlength: [8, "Password must be up to 8 characters"],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Login
userSchema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

// Register
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
