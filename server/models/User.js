const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: function () {
        return !this.googleId;
      },
    },
    photo: { type: String, default: "https://i.ibb.co/MBtjqXQ/no-avatar.png" },
    googleId: { type: String }, // Google login-এর জন্য
  },

  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);
