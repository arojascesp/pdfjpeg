const ensureMandatoryDirectories = require('./validators/routes-validator');
const transformPDF = require('./transformer/pdfTransformer');


const main = async () => {
	try {
		await ensureMandatoryDirectories();
		await transformPDF();
	} catch (e) {
		console.log(e.message);
		process.exit();
	}
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
}

(async () => {
	main()
})();