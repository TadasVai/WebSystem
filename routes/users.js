const express = require('express'); 
const router = express.Router();

//Login Page
router.get('/login', (req, res) => res.render('Login'));

//Login Page
router.get('/register', (req, res) => res.render('Register'));

module.exports = router; 