//Excercise can be found at http://javascript.info/class-inheritance#extended-clock

class ExtendedClock extends Clock {
	constructor(options) {
		super(options);
		if (!options.precision) {
			options.precision = 1000;
		}
		console.log(options.precision)
	}
}
