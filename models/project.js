const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjectSchema = new Schema({
    name: {
        type: String,
        require: true,
        max: 20
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    updatedAt: {
        type: Date
    }
})

let Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;