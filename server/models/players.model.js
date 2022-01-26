const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Name is required"],
        minlength: [5, "Name must be at least 5 characters"]  
    }
}, { timestamps: true });

module.exports  = mongoose.model('Player', PlayerSchema);
