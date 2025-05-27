const path = require('path');
const pdf = require('pdf-poppler');

const PATHS = require('../shared/constants');
const { havePdfs, getPdfs } = require('../validators/files-validator');

// const files = await fs.readdir('./in', { encoding: 'utf-8' });

	// for (const file of files) {
	// 	const [filename, extension] = file.split('.');
	// 	const options = {
	// 		format: 'jpeg',
	// 		out_dir: path.dirname('./out'),
	// 		out_prefix: path.dirname('./out').concat(`${filename}-image`),
	// 		page: null
	// 	}
	// 	pdf.convert(path.resolve('./','in', file), options);
// }

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