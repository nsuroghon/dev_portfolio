const mongoose = require('mongoose');
const { Schema } = mongoose

const projectSchema = new Schema ({
    id: { type: String },
    title: { type: String },
    role: { type: String },
    agency: { type: String },
    year: { type: String },
    text: { type: String },
    thumbnail: { type: String},
    images: [{type: String}],
    githubUrl: { type: String },
    visitUrl: { type: String },
})

const Project = mongoose.model("Project", projectSchema)

module.exports = Project;