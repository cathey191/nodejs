process.stdout.write('\n\nHello & Welcome to the Quiz\n');

var questions = ['2 + 2 = ', '2 * 2 = ', '2 / 2 = '];
var answers = ['4', '4', '1'];
var usersAnswers = [];

function askQuestion(i) {
	process.stdout.write(`\n\n${questions[i]}\n\n`);
}

process.stdin.on('data', function(answer) {
	var questionNumber = usersAnswers.length;
	var inputAnswer = answer.toString().trim();

	if (usersAnswers.length != answers.length) {
		usersAnswers.push(inputAnswer);

		if (usersAnswers.length != answers.length) {
			askQuestion(usersAnswers.length);
		} else {
			process.exit();
		}
	}
});

askQuestion(0);

process.on('exit', function() {
	var correct = [],
		incorrect = [];

	for (var i = 0; i < answers.length; i++) {
		if (answers[i] === usersAnswers[i]) {
			correct.push(i);
		} else {
			incorrect.push(i);
		}
	}

	if (correct.length === answers.length) {
		var write = 'You got them all correct!! Well Done!!';
	} else if (incorrect.length === answers.length) {
		var write = 'You got them all WRONG!! Well Done!!';
	} else {
		var write = `You got ${correct.length} correct and ${
			incorrect.length
		} wrong.`;
	}

	process.stdout.write(`\n\n${write}\n\n`);
});
