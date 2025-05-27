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
}

(async () => {
	main()
})();