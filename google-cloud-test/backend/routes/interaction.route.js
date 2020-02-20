let express = require('express'),
  mongoose = require('mongoose'),
  router = express.Router();


// User model
let Interaction = require('../models/Interaction');

//testing URL: http://localhost:4000/api/create-interaction/2/correct/10000/20000/Read%20from%20screen
//testing URL: http://localhost:4000/api/create-interaction/3/incorrect/10001/15467/Write%20on%20screen

router.get('/create-interaction/:questionId/:result/:userId/:timeSpent/:questionType', (req, res, next) => {
   
  //const url = req.protocol + '://' + req.get('host')
console.log(req.params);

  const interaction = new Interaction({
    _id: new mongoose.Types.ObjectId(),
    userId: req.params.userId,
    questionId: req.params.questionId,
    questionType: req.params.questionType,
    result: req.params.result,
    timeSpent: req.params.timeSpent
  });
  interaction.save().then(result => {
    res.status(201).json({
      message: "Interaction saved!",
      interactionCreated: {
        _id: result._id,
        userId: result.userId,
        questionId: result.questionId,
        questionType: result.questionType,
        result: result.result,
        timeSpent: result.timeSpent
      }
    })
  }).catch(err => {
    console.log(err),
      res.status(500).json({
        error: err
      });
  })
});

router.get("/interactions", (req, res, next) => {
    
    Interaction.find({}).then(data => {
        console.log(data);
      res.status(200).json({
        message: "Interactions retrieved successfully!",
        interactions: data
      });
    })
  });

module.exports = router;