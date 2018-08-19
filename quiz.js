process.stdout.write('\n\nHello & Welcome to the Quiz\n\n');

var questions = ['2 + 2 = ', '2 * 2 = ', '2 / 2 = '];
var answers = ['4', '4', '1'];
var usersAnswers = [];

function askQuestion(i) {
	process.stdout.write(`\n${questions[i]}\n\n`);
}

process.stdin.on('data', function(answer) {
	var questionNumber = usersAnswers.length;
	var inputAnswer = answer.toString().trim();

	if (inputAnswer == answers[questionNumber]) {
		process.stdout.write(`Correct\n\n`);
		usersAnswers.push(inputAnswer);

		if (usersAnswers.length < answers.length) {
			askQuestion(usersAnswers.length);
		} else {
			process.exit();
		}
	} else {
		process.stdout.write(`${inputAnswer} is incorrect. Please try again\n\n`);
	}
});

askQuestion(0);

process.on('exit', function() {
	process.stdout.write(`\n\n\n Congrates, you have completed the quiz\n\n\n`);
});
