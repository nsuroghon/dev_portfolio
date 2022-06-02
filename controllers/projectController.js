const db = require('../models');

module.exports = {

    // @desc Get All Projects Data
    // @route GET /api/projects
    getAllProjects: async function(req,res) {
        await db.Project
               .find({ })
               .then(result => {
                   res.status(200).json(result)
               })
               .catch(err => res.status(422).json(err))
    },

    deleteAllProjects: async function(req,res) {
        await db.Project.deleteMany({ })
    },

    // @desc Set One Project
    // @route POST /api/projects
    setProject: async function(req, res) {
        console.log(req.file)
        await db.Project
            .create({
                id: req.body.id,
                title: req.body.title,
                // thumbnail: req.file.path
            })
            .then(result => res.json(result))
            .catch(err => res.status(422).json(err));

    }


}