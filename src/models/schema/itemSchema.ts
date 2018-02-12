import { Schema } from "mongoose";

export const ItemSchema: Schema = new Schema({
    name: String,
    description: String,
    price: Number,
    type: { type: Schema.Types.ObjectId, ref: 'types' }
  });
