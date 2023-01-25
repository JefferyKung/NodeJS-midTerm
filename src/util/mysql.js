const mysql = require("mysql2");

console.log("MYSQL_HOST: ", process.env.MYSQL_HOST);

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DBNAME,
  port: process.env.MYSQL_PORT
});

const sql = `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='railway' AND TABLE_NAME='Books'`; //to query and check if table "Books" exists

pool.query(
  `
  INSERT INTO Books (Book_ID, Title, Author, Comments, Date, Likes) VALUES
  (1, 'Thoughts on remotely attend class ', 'Actually it is really hard to get used to the difference of time zone. I have to attend class at 5am to 9am.', 'Absolutely tiring' , '20230125', 0),
  (2, 'Happy LNY!', 'My midterm project week is perfectly overlapping my lunar new year holiday. It s good that I don t have class. so my time is a bit more flexible. On the other hand. my body time zone has already adjusted as same as Pacific time, so I cant sleep well at home.', 'Tired', '20230124', 0),
  (3, 'Got a cold', 'It s third day of lunar new year. I went to ktv with my friends. After that. I felt I had a sore throat', 'poor you', '20200101', 0);`,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Successful creation of 3 books");
  })



pool.query(sql, (err, data) => {
  if (err) {
    return console.error(err.message);
  }




  if (data.length === 0) {
    console.log("Table 'Books' does not exist");
    seedDB();
  } else {
    console.log("Table 'Books' exists");
  }
});

const seedDB = () => {
  pool.query(`DROP TABLE IF EXISTS Books`);

  pool.query(
    `CREATE TABLE Books (
        Book_ID INT PRIMARY KEY AUTO_INCREMENT,
        Title VARCHAR(255) NOT NULL,
        Author TEXT,
        Comments TEXT,
        Date DATE NOT NULL,
        Likes INT NOT NULL
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of the 'Books' table");
    }
  );

  pool.query(
    `
      INSERT INTO Books (Book_ID, Title, Author, Comments, Date, Likes) VALUES
      (1, 'Thoughts on remotely attend class ', 'Actually it is really hard to get used to the difference of time zone. I have to attend class at 5am to 9am.', 'Absolutely tiring' , '20230125', 0),
      (2, 'Happy LNY!', My mid-term project week is perfectly overlapping my lunar new year holiday. It s good that I don t have class. so my time is a bit more flexible. On the other hand. my body time zone has already adjusted as same as Pacific time, so I cant sleep well at home.', 'Tired', '20230124', 0),
      (3, 'Got a cold', 'It s third day of lunar new year. I went to ktv with my friends. After that. I felt I had a sore throat', 'poor you', '20200101', 0);`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of 3 books");
    }
  );
};

// 嘗試去做存帳密的SQL database

const sql2 = `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='railway' AND TABLE_NAME='Accounts'`; //to query and check if table "Books" exists
pool.query(sql2, (err, data) => {
  if (err) {
    return console.error(err.message);
  }
  
  if (data.length === 0) {
    console.log("Table 'Accounts' does not exist");
    seedDB2();
  } else {
    console.log("Table 'Accounts' exists");
  }
});

const seedDB2 = () => {
  pool.query(`DROP TABLE IF EXISTS Accounts`);

  pool.query(
    `CREATE TABLE Accounts (
        Acoount_ID INT PRIMARY KEY AUTO_INCREMENT,
        Email varchar(255) NOT NULL,  
        Password VARCHAR(255) NOT NULL   
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of the 'Accounts' table");
    }
  );

  pool.query(
    `
      INSERT INTO Accounts (Acoount_ID, Email, Password) VALUES
      (1, 'hoge@hoge.com' , 'hogehoge');`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of 1 account");
    }
  );
};




module.exports = pool.promise();
