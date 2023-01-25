const router = require("express").Router();

const {
  getAllBooks,
  getCreateBook,
  postCreateBook,
  getEditBookById,
  postEditBookById,
  deleteBook,
  addLike
} = require("../controller/books.controller");

router.get("/all", getAllBooks);
router.get("/edit/:id", getEditBookById);
router.post("/edit/:id", postEditBookById);
router.get("/create", getCreateBook);
router.post("/create", postCreateBook);
router.delete("/delete/:id", deleteBook);
router.post("/editlikes/:id",addLike)

module.exports = router;
