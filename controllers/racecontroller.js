// // require('dotenv').config();

// const express = require('express');
// const router = express.Router();
// const sequelize = require('../db');
// const Race = sequelize.import('../models/race');
// // const Race = require('../db').import('../models/race');
// const validateSession = require('../middleware/validate-session');

// router.post('/addrace', validateSession, (req, res) => {
//   const raceFromRequest = {
//     raceName: req.body.raceName,
//     raceDate: req.body.raceDate,
//     raceCity: req.body.raceCity,
//     raceState: req.body.raceState,
//     raceCountry: req.body.raceCountry,
//     raceDistance: req.body.raceDistance,
//     userId: req.body.userId
//   }
//   Race.create(raceFromRequest)
//     .then(race => res.status(200).json(race))
//     .catch(err => res.json(req.errors))
// })

// router.get('/showall', function (req, res) {
//     Race.findAll({
//         include: 'loot'
//     })
//       .then(race => {
//         res.status(200).json({
//           raceName: race,
//           message: 'Race(s) successfully retrieved!',
//           number: `${race.length} races logged`
//         })
//       })
//       .catch(err => res.status(500).json({ error: err }))
//   })

// router.get('/:name', (req, res) => {  
//     Race.findOne({ where: { raceName: req.params.name },
//     include: 'loot'
//     }) 
//       .then(race => res.status(200).json(race))
//       .catch(err => res.status(500).json({ error: err}))
//   })

// router.put('/:id', (req, res) => {
//     Race.update(req.body, {
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(recordsChanged => res.status(200).json({ message: 'Race updated'}))
//       .catch(err => res.status(500).json({message: 'Update Failed', error: err}))
// });

// router.delete('/:id', (req, res) =>{ 
//     Race.destroy ({ where: { id: req.params.id } })
//     .then(recordsChanged => res.status(200).json({ message: `${recordsChanged} record(s) deleted.` }))
//     .catch(err => res.status(500).json({ error: err }))
// });


// module.exports = router;