const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TaskSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 40
    },
    description: {
        type: String,
        required: true,
        max: 400
    },
    beginAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    endAt: {
        type: Date,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    updatedAt: {
        type: Date
    }
});

let Task = mongoose.model('Task', TaskSchema);
module.exports = Task;