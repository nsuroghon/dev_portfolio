const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const db = require('../models');

module.exports = {
    
    // @desc Get About Data
    // @route GET /api/about
    getAbout: async function(req,res) {
     await db.About
            .find({})
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => res.status(422).json(err))
    },

    // @desc Set Data
    // @route POST /api/about
    setAbout: async function(req,res) {
        if(!req.body.type || !req.body.content) {
            res.status(400)
            throw new Error('Missing field')
        }

        const data = await db.About.create({
            type: req.body.type,
            content: req.body.content
        })

        res.status(200).json(data)
    
    },

    // @desc Update
    // @route PUT /api/about/:id
    updateAbout: async function(req,res) {
        const data = await db.About.findById(req.params.id)
        if(!data) {
            res.status(400)
            throw new Error('not found')
        }
        const updatedData = await db.About.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        res.status(200).json(updatedData)
    },

    // @desc Delete
    // @route DELETE /api/about/:id
    deleteAbout: async function(req,res) {
        const data = await db.About.findById(req.params.id)
        if(!data) {
            res.status(400)
            throw new Error('not found')
        }
        await data.remove()
        res.status(200).json({id: req.params.id})
        
    }
}

// const registerData = asyncHandler(async (req,res) => {
//     const {projects, about} = req.body

//     // validation
//     if(!projects || !about) {
//         res.status(400)
//         throw new Error("Please include all fields")
//     }


//     const data = await Data.create({
//         projects,
//         about
//     })

//     if(data) {
//         res.status(201).json({
//             _id: data._id,
//             projects: data.projects,
//             about: data.about
//         })
//     } else {
//         res.status(400)
//         throw new error('Invalid user data')
//     }

//     res.send('register data route succesful')

// })

// @desc Get Data
// @route GET /api/data
// const getData = asyncHandler(async (req,res) => {
//     const data = await Data.find()

//     res.status(200).json(data)
// })

// // @desc Set Data
// // @route POST /api/data
// const setData = asyncHandler(async (req,res) => {
//     const data = await Data.create({
//         type: req.body.type,
//         content: req.body.content
//     })
//     res.status(200).json(data)
// })

// // @desc Update
// // @route PUT /api/data/:id
// const updateData = asyncHandler(async (req,res) => {
//     const data = await Data.findById(req.params.id)
    
//     if(!data) {
//         res.status(400)
//         throw new Error('not found')
//     }

//     const updatedData = await Data.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//     })


//     res.status(200).json(updatedData)
// })

// // @desc Delete
// // @route DELETE /api/data/:id
// const deleteData = asyncHandler(async (req,res) => {
//     const data = await Data.findById(req.params.id)
    
//     if(!data) {
//         res.status(400)
//         throw new Error('not found')
//     }

//     await data.remove()

//     res.status(200).json({id: req.params.id})
// })




// module.exports = {
//     registerData,
//     getData,
//     setData,
//     updateData,
//     deleteData
// }