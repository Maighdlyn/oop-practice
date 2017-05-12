//Excercise can be found at http://javascript.info/prototype-inheritance#why-two-hamsters-are-full

let hamster = {
	stomach: [],

	eat(food) {
		this.stomach = [food];
	}
};

let speedy = {
	__proto__: hamster,
	stomach: []
};

let lazy = {
	__proto__: hamster,
	stomach: []
};
