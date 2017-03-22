const express = require('express');
const router = express.Router();
const db = require('../models');
const bp = require('body-parser');

let Cards = db.Card;


router.route('/:status')
  .get((req,res) => {
    Cards.findAll({
      order: "id",
    },
    {where: 
      {status: req.params.status} 
    })
    .then((cards) => {
      res.json({cardlist:{cards}});
    })
    .catch((err) => {
      res.send(err);
    });

  })

  .post((req,res) => {
    Cards.create({
      priority: req.body.title,
      status: req.body.status,
      title: req.body.title,
    })
    .then((card) => {
      res.send('posted bitches');
    })
    .catch(err => {
      res.send(err);
    });
  });

router.route('/:status/:id')
  .delete((req, res) => {
    Cards.findById(this.target.id)
      .then(card => {
        Cards.destroy({
          where: {
            id: `${req.params.id}`
          }
        })
        .then(() => {
          res.send('Hope that wasn\'t important!');
        });
      });
  });

router.route('/:status/:id/edit')
  .put((req,res) => {
    //may have to do find by id first depending on how i want to accomplish my edit
    Cards.update({
      priority: req.body.priority,
      status: req.body.status,
      title: req.body.title,
    },
      {where: {
        id: req.params.id,
      }
    })    
    .then((card) => {
      res.send('card correctd');
    })
    .catch(err => {
      res.send(err);
    });
  });

module.exports = router;



