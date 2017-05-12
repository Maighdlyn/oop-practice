//Exercise can be found at http://javascript.info/class-patterns#an-error-in-the-inheritance

function Animal(name) {
	this.name = name;
}

Animal.prototype.walk = function () {
	alert(this.name + ' walks');
};

function Rabbit(name) {
	this.name = name;
}

Rabbit.prototype._proto_ = Animal.prototype;

Rabbit.prototype.walk = function () {
	alert(this.name + " bounces!");
};
