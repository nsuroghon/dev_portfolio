const mongoose = require('mongoose')
const db = require('../models')
const dotenv = require('dotenv'). config();

const multer = require('multer')
const upload = multer({dest: 'uploads/'})


mongoose.connect(process.env.MONGO_URI);


// const skillsSeed = [
//     {
//         type: 'Education',
//         content: ['Bachelor of Arts', 'Western University', 'Full Stack Development', 'University of Toronto']
//     },
//     {
//         type: 'Technology',
//         content: ['HTML', 'CSS', 'Javascript', 'Sass/SCSS', 'NodeJS', 'SQL', 'MongoDB', 'ExpressJS', 'React', 'Query']
//     },
//     {
//         type: 'skills',
//         content: ['Design', 'Development', 'Deployment', 'Git', 'SEO', 'Responsive Design', 'Animations', 'Modern Frameworks', 'Libraries', 'Source Control', 'Testing', 'Shopify', 'Wordpress', 'Photoshop']
//     }
// ];

const skillsSeed = {
    "education": ["Bachelor of Arts, Western University", "Full Stack Development, University of Toronto"],
    "technology": ["HTML", "CSS", "Javascript", "Sass/SCSS", "NodeJS", "SQL", "MongoDB", "ExpressJS", "React", "Query"],
    "skills": ["Design", "Development", "Deployment", "Git", "SEO", "Responsive Design", "Animations", "Modern Frameworks", "Libraries", "Source Control", "Testing", "Shopify", "Wordpress", "Photoshop"]
}


db.About.deleteMany({})
    .then( () => db.About.insertMany(skillsSeed))
    .then(data => {
        console.log(data + "records inserted!")
        process.exit(0)
    })
    .catch(err => {
        console.log(err)
        process.exit(1)
    })