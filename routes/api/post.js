const express = require('express');
const router = express.Router();
//const User = require("../models/user.js")
//const bcrypt = require('bcrypt');
//const passport = require('passport');

router.get('/',(req,res)=>{
    res.send('Post page');
})

module.exports  = router;