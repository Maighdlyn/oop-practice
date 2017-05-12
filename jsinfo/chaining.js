//Exercise can be found at http://javascript.info/object-methods#chaining

let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep() {
		alert(this.step);
		return this;
	}
};

up().down().showStep();
