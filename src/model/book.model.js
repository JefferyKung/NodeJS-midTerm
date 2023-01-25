// const db = require("../util/sqlite");
const db = require("../util/mysql");

module.exports = class Book {
  constructor(Title, Author, Comments,Date, Likes) {
    this.Title = Title;
    this.Author = Author;
    this.Comments = Comments;
    this.Date = Date;
    this.Likes = Likes;
  }

  save() {
    const sql = "INSERT INTO Books (Title, Author, Comments ,Date,Likes) VALUES (?, ?, ?,?,?)";
    const params = [this.Title, this.Author, this.Comments , this.Date , this.Likes];

    return db.execute(sql, params);
  }

  static find() {
    const sql = "SELECT * FROM Books ORDER BY Book_ID DESC";
    return db.query(sql);
  }

  static findById(id) {
    const sql = "SELECT * FROM Books WHERE Book_ID = ?";
    return db.execute(sql, [id]);
  }

  static updateOne(data) {
    const sql =
      "UPDATE Books SET Title = ?, Author = ?, Comments = ?, Date =?, Likes= ? WHERE (Book_ID = ?)";
    const params = [data.Title, data.Author, data.Comments, data.Date, data.Likes, data.id]; //literal
    // const params = Object.values(data) //shorter but less reliable
    return db.execute(sql, params);
  }

  static deleteOne(id) {
    const sql = "DELETE FROM Books WHERE Book_ID = ?";
    return db.execute(sql, [id]);
  }

  static likePlusOne(id) {
    const sql = "UPDATE Books SET Likes= Likes +1 WHERE Book_ID = ?";
    return db.execute(sql, [id]);
  }
};
