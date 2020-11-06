const url = require('url');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');
const Quest = require('../../models/Quest');
const User = require('../../models/User');

//const checkObjectId = require('../../middleware/checkObjectId');

router.post(
  '/',
    [ 
        auth, 
        [
          check('catname', 'Category is required').not().isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newCat = new Quest ({
        catname: req.body.catname
      });

      const post = await newCat.save();
      res.json(post);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

router.get(
  '/',
    [ 
        auth, 
        [
          check('catname', 'Category is required').not().isEmpty()
        ]
    ],
    async (req, res) => {
      try {
        const catobject = url.parse(req.url,true).query;
        console.log(catobject.catname);

        const catposts = await Quest.find({catname:catobject.catname});
        res.json(catposts);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
);

router.post(
  '/qpost',
    [ 
        auth, 
        [
          check('qtext', 'Question is required').not().isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const category = await Quest.findById(req.body.id);
      
      const questpost = {
            qtext: req.body.qtext,
            user: req.user.id
          };
      
      category.questions.unshift(questpost);

      await category.save();
      res.json(category.questions);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

router.post(
  '/apost',
    [ 
        auth, 
        [
          check('atext', 'Answer is required').not().isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const question = await Quest.findById(req.body.id);
      
      const answerpost = {
            atext: req.body.atext,
            user: req.user.id
          };
      
      question.questions.forEach(function(element) {
        if(element['_id'] == req.body.qid){
          element.answers.unshift(answerpost);
        }
      });
      

      await question.save();
      res.json(question.questions);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);


module.exports = router;