//Create an object calculator with three methods:
//
//read() prompts for two values and saves them as object properties.
//sum() returns the sum of saved values.
//mul() multiplies saved values and returns the result.

let calculator = {
	read() {
		this.first = +prompt("First number?", 0);
		this.second = +prompt("Second number?", 0);
	},
	sum() {
		return this.first + this.second;
	},
	mul() {
		return this.first * this.second;
	}
}

calculator();
alert(calculator.sum());
alert(calculator.mul());
