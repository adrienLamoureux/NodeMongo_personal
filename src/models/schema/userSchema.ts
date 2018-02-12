import { Schema } from "mongoose";

export const UserSchema: Schema = new Schema({
    firstName: String,
    lastName: String,
    age: String,
    items: [{ type: Schema.Types.ObjectId, ref: 'items' }]
  });