const express = require('express');
const router = express.Router();
const db = require('../models');
const bp = require('body-parser');

let Cards = db.Card;


router.route('/allcards')
  .get((req,res) => {
    Cards.findAll()
    .then((cards) => {
      res.send(cards);
    })
    .catch((err) => {
      res.send(err);
    });
  })

  .post((req,res) => {
    Cards.create({
      priority: req.body.priority,
      status: req.body.status,
      title: req.body.title,
      assignTo: req.body.assignTo
    })
    .then((card) => {
      res.send(card);
    })
    .catch(err => {
      res.send(err);
    });
  });

router.route('/:id')
  .delete((req, res) => {
    Cards.destroy({
      where: {
        id: `${req.params.id}`
      }
    })
      .then(() => {
        res.send('Hope that wasn\'t important!');
      });
  });

router.route('/editCard')
  .put((req,res) => {
    let cardID = req.body._key;

    Cards.update({
      _key: req.body._key,
      priority: req.body.priority,
      status: req.body.status,
      title: req.body.title,
      assignTo: req.body.assignTo
    },
      {where: {
        id: cardID
      }
    })    
    .then(() => {
      Cards.findById(cardID)
        .then(card => {
          res.send(card);
        });
      
    })
    .catch(err => {
      res.send(err);
    });
  });

module.exports = router;



