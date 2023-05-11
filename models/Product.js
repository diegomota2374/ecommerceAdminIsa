import { model, Schema, models } from "mongoose";

const ProductSchema = new Schema({
  title: String,
  description: String,
  price: { type: Number, required: true },
  images: [{ type: String }],
});

export const Product = models.Product || model("Product", ProductSchema);
