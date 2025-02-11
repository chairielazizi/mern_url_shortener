import mongoose from "mongoose";
import { nanoid } from "nanoid";

const ShortURLSchema = new mongoose.Schema(
  {
    originalURL: {
      type: String,
      required: true,
    },
    shortURL: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid().substring(0, 10),
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const ShortURL = mongoose.model("ShortURL", ShortURLSchema);

export default ShortURL;
