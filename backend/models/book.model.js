import mongoose, { Schema } from "mongoose";

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  publishData: {
    type: String,
    require: true
  },
},{timestamp: true})

export const Book = mongoose.model('Book', bookSchema)
