const express = require("express");

const router = express.Router();

const bookController = require("../controllers/book.controller");

router.get("/", bookController.getAllBooks);
router.post("/", bookController.addBook);
router.put("/:id", bookController.updateBook);
router.get("/:id", bookController.getBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
