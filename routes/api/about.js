const express = require("express");
const router = express.Router()
const aboutController = require('../../controllers/dataController')

router.route('/')
    .get(aboutController.getAbout)
    .post(aboutController.setAbout)

router.route('/:id')
    .put(aboutController.updateAbout)
    .delete(aboutController.deleteAbout)

module.exports = router;