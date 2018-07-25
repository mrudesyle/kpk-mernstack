import mongoose from 'mongoose'

const wellStatuschema = new mongoose.Schema({
    well: {
        type: String
    },
    status: {
        type: String
    },
    comments: String,
    date: {
        type: Date,
        default: Date.now
    },
    approved: {
        type: Number,
        min: 0,
        max: 2,
        default: 0
    }
});

export default mongoose.model('Wellstatus', wellStatuschema)



