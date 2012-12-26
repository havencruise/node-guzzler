var server = require("../controllers/server"),
	router = require("../controllers/router");


server.start(router.route);