const db = require("../util/mysql");

module.exports = class Acoount {
    constructor(Email,Password) {
        this.Email = Email;
        this.Password = Password;
    }

    save() {
        const sql2 = "INSERT INTO Accounts (Email,Password) VALUES (?, ?)";
        const params = [this.Email, this.Password];
    
        return db.execute(sql2, params);
      }
    
    static findEmail(email,password) {
        const sql2 = "SELECT * FROM Accounts WHERE (Email,Password) = (?,?)";
        const params = [email, password];
        return db.execute(sql2, params);
    }
    
}