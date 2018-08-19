// var name = 'Cat';

// console.log('Hello ' + name);
// console.log(`Hello ${name}`);

// console.log(__dirname);
// console.log(__filename);

// \n is like a br in html
process.stdout.write('\nWhat is your name?\n\n');
process.stdin.on('data', function(answer) {
	process.stdout.write(`\n\n Hello ${answer}\n\n`);
	process.exit();
});
