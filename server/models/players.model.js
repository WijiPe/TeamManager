const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    player_name: { 
        type: String,
        required: [true, "Player Name is required"],
        minlength: [5, "player_name must be at least 5 characters"]  
    },
    preferred_position: { 
        type: String,
        required: [true, "Preferred Position is required"]
    },
    game_1: { 
        type: String,
    },
    game_2: { 
        type: String,
    },
    game_3: { 
        type: String,
    }
}, { timestamps: true });

module.exports.Player  = mongoose.model('Player', PlayerSchema);
