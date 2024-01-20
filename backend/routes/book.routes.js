import express from "express";
import { Book } from "../models/book.model.js";

const routes = express.Router();

// create new book
routes.post("/", async (req, res) => {
  try {
    if (!req.body.title && !req.body.author && !req.body.publishData) {
      return res.status(400).send({
        message: "all fields are required",
      });
    }
    const { title, author, publishData } = req.body;
    const newBook = { title, author, publishData };
    const book = await Book.create(newBook);
    return res
      .status(200)
      .json({ message: "book created successfully", book: newBook });
  } catch (error) {
    return res.status(500).send({ message: "server error" });
  }
});

// get all book
routes.get("/", async (req, res) => {
  try {
    const allBooks = await Book.find({});
    return res.status(200).json({
      count: allBooks.length,
      data: allBooks,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

// get one book by id
routes.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
});

// update one book
routes.put("/:id", async (req, res) => {
  try {
    if (!req.body.title && !req.body.author && !req.body.publishData) {
      return res.status(400).send({
        message: "all fields are required",
      });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).send({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book update successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

// delete book
routes.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send({ message: "can not find the book" });
    }
    return res.status(200).send({ message: "Book delete successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

export default routes;
