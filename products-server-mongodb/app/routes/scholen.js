var express = require('express');
const { ObjectID } = require('mongodb');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
var db;

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if (err) return console.log(err)
  db = database.db('scholen')
})

/* GET ALL PRODUCTS */
router.get('/', (req, res) => {
  db.collection('items').find().toArray((err, result) => {
    if (err) return
    console.log(result)
    res.json(result)
  })
})

/* ADD PRODUCT TO DB */
router.post('/add', (req, res) => {
  db.collection('items').insertOne(req.body)
})

/* SEARCH PRODUCTS */
router.post('/searchAll', (req, res) => {
  //var query = { name: req.body.name }
  var query = { naam: req.body.naam }
  db.collection('items').find(query).toArray((err, result) => {
   if (err) return
   console.log(result)
   res.json(result)
 })
})

/* SEARCH ONE PRODUCT */
router.post('/searchOne', (req, res) => {
  var query = { naam: req.body.naam }
  db.collection('items').find(query).toArray((err, result) => {
   if (err) return
   res.json(result)
 })
})

/* DELETE A PRODUCT */
router.delete('/delete/:naam', (req, res) => {
  db.collection('items').findOneAndDelete({ naam: req.params.naam })
})

/* EDIT A PRODUCT */
router.post('/edit', (req, res) => {
  var objectId = new ObjectID(req.body._id)
  console.log(objectId)
  db.collection('items').replaceOne({ _id: objectId }, req.body)
})

module.exports = router;