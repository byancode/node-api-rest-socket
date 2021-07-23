import express from 'express';

express.application.group = express.Router.group = function (arg1, arg2) {
	var callback, path;

	if (arg2 === undefined) {
		path = '/';
		callback = arg1;
	} else {
		path = arg1;
		callback = arg2;
	}

	var router = express.Router();
	callback(router);
	this.use(path, router);
	return router;
};

export default express;
