const { signup, login } = require('../Contollers/AuthControllers');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/login',loginValidation,login);

router.post('/signup',signupValidation,signup);

module.exports = router;