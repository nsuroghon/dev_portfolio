const path = require("path")
const router = require('express').Router()
const apiRoutes = require('./api')

// api routes
router.use('/api', apiRoutes)

module.exports = router



// const Model = require('../models/about')
// const {getData, setData, updateData, deleteData } = require('../controllers/dataController')

// router.get('/', getData)

// router.post('/', setData)

// router.put('/:id', updateData)

// router.delete('/:id', deleteData)

// module.exports = router