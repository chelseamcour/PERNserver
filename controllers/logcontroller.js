const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const Log = sequelize.import('../models/log');
const validateSession = require('../middleware/validate-session');

router.post('/addlog', validateSession, (req, res) => {
  const logFromRequest = {
    raceName: req.body.raceName,
    raceDate: req.body.raceDate,
    raceCity: req.body.raceCity,
    raceState: req.body.raceState,
    raceCountry: req.body.raceCountry,
    raceDistance: req.body.raceDistance,
    medal: req.body.medal,
    medalRating: req.body.medalRating,
    tshirt: req.body.tshirt,
    tshirtRating: req.body.tshirtRating,
    snacks: req.body.snacks,
    snacksRating: req.body.snacksRating,
    photos: req.body.photos
  }
  Log.create(logFromRequest)
    .then(log => res.status(200).json(log))
    .catch(err => res.json(req.errors))
})

router.get('/showall', function (req, res) {
    Log.findAll()
      .then(log => {
        res.status(200).json({
          logName: log,
          message: 'Loot successfully retrieved!',
          number: `${log.length} loot logged`
        })
      })
      .catch(err => res.status(500).json({ error: err }))
  })

router.get('/:id', (req, res) => {  
    Log.findOne({ where: { id: req.params.id }}) 
      .then(log => res.status(200).json(log))
      .catch(err => res.status(500).json({ error: err}))
  })

router.put('/:id', (req, res) => {
    Log.update(req.body, {
      where: { id: req.params.id }})
      .then(recordsChanged => res.status(200).json({ message: 'Loot updated'}))
      .catch(err => res.status(500).json({message: 'Update Failed', error: err}))
});

router.delete('/:id', (req, res) =>{ 
    Log.destroy ({ where: { id: req.params.id } })
    .then(recordsChanged => res.status(200).json({ message: `${recordsChanged} record(s) deleted.` }))
    .catch(err => res.status(500).json({ error: err }))
});


module.exports = router;