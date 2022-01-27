const PlayerController = require('../controllers/players.controller');
module.exports = function(app){
    app.get('/showPlayers', PlayerController.showAllPlayers);
    app.post('/addPlayer', PlayerController.createPlayer);
    app.get('/showOnePlayer/:id', PlayerController.showOnePlayer);
    app.delete('/delete/:id', PlayerController.removePlayer);
    app.put('/update/:id', PlayerController.updatePlayer);
    
}