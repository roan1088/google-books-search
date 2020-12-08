const router = require("express").Router();
const { Book } = require("../models");

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  }
  catch (err) {
    res.json(err);
  }
});

router.post("/", async ({ body }, res) => {
  try {
    const book = await Book.create(body);
    res.json(book);
  }
  catch (err) {
    res.json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const response = await Book.deleteOne({ _id: req.params.id });
    res.json(response);
  }
  catch (err) {
    res.json(err);
  }
});

module.exports = router;