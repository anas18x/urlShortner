import mongoose from "mongoose";
import { Schema } from "mongoose";

const urlSchema = new Schema({
    shortId: { type: String, required: true, unique: true},
    redirectURL: { type: String, required: true}
});

export const URL = mongoose.model("urls",urlSchema) 