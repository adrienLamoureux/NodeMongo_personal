import { Schema } from "mongoose";

export const TypeSchema: Schema = new Schema({
    name: String,
    description: String,
    appId: Number
  });
