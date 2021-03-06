//Exercise can be found at http://javascript.info/constructor-new#create-an-extendable-calculator

function Calculator() {

	let methods = {
		"-": (a, b) => a - b,
		"+": (a, b) => a + b
	};

	this.calculate = function (string) {

		let split = string.split(' '),
			a = +split[0],
			op = split[1],
			b = +split[2]

		if (!methods[op] || isNaN(a) || isNaN(b)) {
			return NaN;
		}

		return methods[op](a, b);
	}

	this.addMethod = function (name, func) {
		methods[name] = func;
	};
}
