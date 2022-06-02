const mongoose = require('mongoose');
const { Schema } = mongoose

// const aboutSchema = new Schema ({
//     type: { type: String },
//     content: [{ type: String }]
// })

const aboutSchema = new Schema ({
    education: [{ type: String }],
    technology: [{ type: String }],
    skills: [{type: String}]
})

const About = mongoose.model("About", aboutSchema)

module.exports = About;

// const dataSchema = mongoose.Schema({
//     type: { type: String },
//     content: { type: String }
// });

// module.exports = mongoose.model('Data', dataSchema)