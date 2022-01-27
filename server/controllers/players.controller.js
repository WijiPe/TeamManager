const {Player} = require('../models/players.model');

module.exports.showAllPlayers = (request, response) => {
    Player.find()
        .then(players =>response.json(players))
        .catch(err =>response.status(400).json(err));
}

module.exports.createPlayer = (request, response) => {
    Player.create(request.body)
        .then(newPLayer =>response.json(newPLayer))
        .catch(err =>response.status(400).json(err));
}

module.exports.showOnePlayer = (request, response) => {
    Player.findOne({_id: request.params.id})
    .then(player =>response.json(player))
    .catch(err =>response.status(400).json(err));
}

module.exports.removePlayer = (request, response) => {
    Player.deleteOne({_id: request.params.id})
    .then(deleteConfirmation =>response.json(deleteConfirmation))
    .catch(err => response.status(400).json(err));
}

module.exports.updatePlayer = (request, response) => {
    Player.updateOne({_id: request.params.id}, request.body, { new: true, runValidators: true })
    .then(updatePlayer =>response.json(updatePlayer))
    .catch(err =>response.status(400).json(err));
}


