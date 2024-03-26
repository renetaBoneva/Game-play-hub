const { requester } = require("./requester");

exports.getAllGames = async () => requester.get('/games');