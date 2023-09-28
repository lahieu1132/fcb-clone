const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      default: "",
    },
    surName: {
      type: String,
      default: "",
    },

    city: {
      type: String,
      default: "",
    },
    DateOfBirth: {
      type: Date,
      default: "",
    },
    gender: {
      type: String,
      default: "none",
      enum: ["male", "female", "none"],
    },
    role: {
      type: Number,
      enum: [0, 1, 2],
      default: 0,
    },
  },
  { timestamps: true }
);

userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

userSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("user", userSchema);
