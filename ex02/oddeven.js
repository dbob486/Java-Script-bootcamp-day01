var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var ask = ()=> {
	rl.question('Enter a number: ', (answer) => {
		if (answer === '\0')
		{
			rl.close();
			process.exit();
		}
		else
		{
			if (isNaN(answer) || isNaN(parseInt(answer)))
				console.log("\'%s\' is no a number", answer);
			else
				console.log("The number %d is %s", answer,
					(parseInt(answer) % 2 == 0) ? "even" : "odd");
			ask();
		}
	});
};
ask();