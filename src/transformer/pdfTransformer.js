const path = require('path');
const pdf = require('pdf-poppler');

const PATHS = require('../shared/constants');
const { havePdfs, getPdfs } = require('../validators/files-validator');

const transformPDF = async () => {
	if (!havePdfs(PATHS.in)) {
		throw new Error(`El directorio no reconoce archivos pdf para convertir`);
	}
	const files = getPdfs(PATHS.in);

	for (const file of files) {
		const [filename] = file.split('.');
		const finalFinal = filename.split('\\').pop();

		await pdf.convert(path.resolve(PATHS.in, file), {
			format: 'jpeg',
			out_dir: PATHS.out,
			out_prefix: `${finalFinal}-image`,
			page: null
		});
	}

}

module.exports = transformPDF;