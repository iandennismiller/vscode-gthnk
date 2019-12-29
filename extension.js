// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "gthnk" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable1 = vscode.commands.registerCommand('extension.insertDate', function () {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			var today = new Date();
			var dd = String(today.getDate()).padStart(2, '0');
			var mm = String(today.getMonth() + 1).padStart(2, '0');
			var yyyy = today.getFullYear();
			var insert_str = yyyy + '-' + mm + '-' + dd + "\n\n";

			var linecount = editor.document.lineCount;
			editor.edit((eb) => eb.insert(new vscode.Position(linecount), insert_str));

			vscode.window.setStatusBarMessage('Gthnk: insert date', 500);
		}
	});

	let disposable2 = vscode.commands.registerCommand('extension.insertTime', function () {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			var today = new Date();
			var hh = String(today.getHours()).padStart(2, '0');
			var mm = String(today.getMinutes()).padStart(2, '0');
			var insert_str = hh + mm + "\n\n";

			var linecount = editor.document.lineCount;
			editor.edit((eb) => eb.insert(new vscode.Position(linecount), insert_str));

			vscode.window.setStatusBarMessage('Gthnk: insert time', 500);
		}
	});

	context.subscriptions.push(disposable1);
	context.subscriptions.push(disposable2);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
