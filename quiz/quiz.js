const fs = require('fs');
process.stdout.write('\n\nHello & Welcome to the Quiz\n');

var questions = ['Pick a username?', '2 + 2 = ', '2 * 2 = ', '2 / 2 = '];
var answers = [true, '4', '4', '1'];
var usersAnswers = [];

function askQuestion(i) {
	process.stdout.write(`\n\n${questions[i]}\n\n`);
}

process.stdin.on('data', function(answer) {
	var questionNumber = usersAnswers.length;
	var inputAnswer = answer.toString().trim();
	usersAnswers.push(inputAnswer);

	if (usersAnswers.length != answers.length) {
		askQuestion(usersAnswers.length);
	} else {
		process.exit();
	}
});

askQuestion(0);

process.on('exit', function() {
	var correct = [],
		incorrect = [],
		write;

	for (var i = 1; i < answers.length; i++) {
		if (answers[i] === usersAnswers[i]) {
			correct.push(i);
			process.stdout.write(
				`\n\n${questions[i]}: ${usersAnswers[i]} Correct!\n\n`
			);
		} else {
			incorrect.push(i);
			process.stdout.write(
				`\n\n${questions[i]}: ${usersAnswers[i]} Incorrect!\n\n`
			);
		}
	}

	if (correct.length + 1 === answers.length) {
		write = 'You got them all correct!! Well Done!!';
	} else if (incorrect.length + 1 === answers.length) {
		write = 'You got them all WRONG!! Well Done!!';
	} else {
		write = `You got ${correct.length} correct and ${incorrect.length} wrong.`;
	}

	var content = `Username: ${usersAnswers[0]}\n${write}`;

	fs.writeFile(`./files/${usersAnswers[0]}.txt`, content, err => {
		if (err) throw err;
	});

	process.stdout.write(`\n\n${write}\n\n`);
});
