const fs = require('fs');
const PATHS = require('../shared/constants');

const existIn = () => fs.existsSync(PATHS.in);
const existOut = () => fs.existsSync(PATHS.out);

const createInDir = async () => await fs.promises.mkdir(PATHS.in);
const createOutDir = async () => await fs.promises.mkdir(PATHS.out);

async function ensureMandatoryDirectories() {
	if (!existIn()) {
		await createInDir();
		throw new Error(`
			No existe el directorio de entrada, por ende no hay nada que transformar
			A continuación cargue los documentos a transformar en /in
			e inicialice nuevamente la aplicación
			`);
	}

	if (!existOut()) {
		console.log('Creando el directorio de salidas...');
		await createOutDir();
	}
}


module.exports = ensureMandatoryDirectories;