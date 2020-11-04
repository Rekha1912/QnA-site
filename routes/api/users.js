const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check')
const User = require('../../models/User')
const bcrypt = require('bcryptjs');
//const passport = require('passport');

// post request, register user
router.post(
    '/',
    [
        check('name', 'Name is required')
            .not()
            .isEmpty(),
        check('email', 'Please include a valid email')
            .isEmail(),
        check('password', 'Please enter a password with 8 or more characters')
            .isLength({min: 8}),
        //check('confirm_password','Passwords must match')
        //    .custom((value, {req}) => (value === req.body.password))
    ], 
    async (req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }

        const { name, email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if(user){
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] }); 
            }
            user = new User({
                name,
                email,
                password
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();

            res.send('User Registered');

        } catch(err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports  = router;