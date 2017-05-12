//Excercise can be found at http://javascript.info/constructor-new#create-new-accumulator

function Accumulator(value) {
	this.value = value;
	this.read = function () {
		this.value += +prompt("What number?", 0);
	};
}

let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
alert(accumulator.value); // shows the sum of these values
