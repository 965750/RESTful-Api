const mongosse = require('mongoose');
const Schema = mongosse.Schema;

// create ninja Schema & model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String
        
    },
    available: {
        type: Boolean,
        default: false
    }
    // add in geo location
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;