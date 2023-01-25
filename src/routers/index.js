const router = require('express').Router()

const {getLoginPage, postLogin, getRegisterPage, postRegister} = require('../controller/home.controller')

/* GET home page. */
router.get('/', getLoginPage);
router.post('/login', postLogin);
router.get('/register',getRegisterPage);
router.post('/register',postRegister);

module.exports = router;