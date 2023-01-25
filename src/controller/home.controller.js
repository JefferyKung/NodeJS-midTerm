const { findEmail } = require("../model/account.model");
const Account = require("../model/account.model")

exports.getLoginPage = (req, res, next) => {
    res.render('index', { title: 'Jeff bLog' });
};

exports.postLogin = (req, res, next) => {
    const { email, password } = req.body;


    Account.findEmail(email, password)
        .then(([row]) => {
            console.log(row);
            if(row.length !== 0){
                res.redirect('/books/all');
            }else {
                res.json("no match")
            }
        })
        .catch((err) => console.error(err.message));


    // console.log(emailMatch)
    // if (emailMatch) {
    //     res.redirect('/books/all');
    // } else {
    //     res.redirect('/');
    // }


    // if (email === 'hoge@hoge.com' && password === 'hogehoge') {
    //     res.redirect('/books/all');
    // } else {
    //     res.redirect('/');
    // }
}

exports.getRegisterPage = (req, res, next) =>{

    res.render('signup');

}

exports.postRegister = (req, res, next) =>{
    const { email, password } = req.body;
    const newAccount = new Account(email,password);

    newAccount.save().then( ()=>{res.redirect('/')}).catch((err) => console.error(err.message));
   

}