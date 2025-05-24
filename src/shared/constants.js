const path = require('path');
const actualDirectory = path.dirname('.');

const PATHS = {
	in: path.resolve(actualDirectory, './in'),
	out: path.resolve(actualDirectory, './out'),
}

module.exports = PATHS;