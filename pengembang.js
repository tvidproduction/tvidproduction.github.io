// Untuk Versi Development
// console.log("pengembang.js")

const jalur = require('path')

module.exports = {
	// mode: 'DEVELOPMENT',
	mode: 'development',
	entry: './Aset/Fungsi/Users_Define_Functions/Slots.js',
	watch: false,
	// devtool: true,
	// devtool: 'eval',
	devtool: false,
	output: {
		path: jalur.resolve(__dirname, 'Aset/Fungsi/Node_Packages_Management'),
		filename: 'Terminal.js',
		clean: true
	}
}