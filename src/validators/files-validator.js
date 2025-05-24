const fs = require('fs');
const path = require('path');
const PATHS = require('../shared/constants');

const PDF_EXTENSION = '.pdf';

const havePdfs = (dirpath) => !!getPdfs(dirpath).length;

const getPdfs = (dirpath) => {
	return fs
		.readdirSync(dirpath)
		.filter((file) => file.endsWith(PDF_EXTENSION))
		.map(file => path.resolve(PATHS.in, file));
}

module.exports = {
	havePdfs,
	getPdfs
}