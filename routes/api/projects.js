const express = require("express");
const router = express.Router()
const projectsController = require('../../controllers/projectController')

const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+'-'+file.originalname);
    }
});

const upload = multer({ storage });


router.route('/')
    .get(projectsController.getAllProjects)
    .post(upload.single('thumbnail'),projectsController.setProject)
    .delete(projectsController.deleteAllProjects)

// router.route('/:id')
//     .put(aboutController.updateAbout)
//     .delete(aboutController.deleteAbout)

module.exports = router;