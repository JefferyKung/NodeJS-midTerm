const Book = require("../model/book.model");

exports.getAllBooks = (req, res) => {
  Book.find()
    .then(([rows]) => {
      console.log(rows);
      res.render("books", { model: rows });
    })
    .catch((err) => console.error(err.message));
};

exports.getCreateBook = (req, res) => {
  res.render("create", { model: {} });
};

exports.postCreateBook = (req, res) => {
  const { Title, Author, Comments ,Date, Likes } = req.body;

  const newBook = new Book(Title, Author, Comments,Date,Likes);
  newBook
    .save()
    .then(() => {
      res.redirect("/books/all");
    })
    .catch((err) => console.error(err.message));
};

exports.getEditBookById = (req, res) => {
  const id = req.params.id;
  Book.findById(id)
    .then(([row]) => {
      console.log(row);
      res.render("edit", { model: row[0] });
    })
    .catch((err) => console.error(err.message));
};

exports.postEditBookById = (req, res) => {
  const id = req.params.id;
  const { Title, Author, Comments,Date,Likes } = req.body;

  const dataToUpdate = { id, Title, Author, Comments,Date,Likes };

  Book.updateOne(dataToUpdate).then(() => {
    res.redirect("/books/all")
  }).catch((err) => console.error(err.message));
};

exports.deleteBook = (req, res) => {
  const id = req.params.id;

  Book.deleteOne(id).then(() => {
    res.redirect("/books/all")
  }).catch((err) => console.error(err.message));
};


exports.addLike = (req, res)=>{
  const id = req.params.id;

  Book.likePlusOne(id).then(()=>{res.redirect("/books/all")}).catch((err) => console.error(err.message))
  
  
}