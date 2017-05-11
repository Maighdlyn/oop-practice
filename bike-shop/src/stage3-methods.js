function Bike(rings = [3, 7]) {
	this.tires = [new Tire(), new Tire()];
	this.frame = new Frame();
	this.moving = false;
	this.rings = rings;
}

Bike.prototype.isMoving = function () {
	return this.moving;
}

Bike.prototype.pedal = function () {
	if ((this.tires[0].flat === true) || (this.tires[1].flat === true)) {
		throw "Can't pedal with a flat tire"
	}
	this.moving = true;
}

Bike.prototype.brake = function () {
	this.moving = false;
}

Bike.prototype.gearSpeeds = function () {
	return this.rings[0] * this.rings[1];
}

function Frame() {
}

function Tire() {
	this.flat = false;

}

Tire.prototype.isFlat = function () {
	return this.flat;
}

Tire.prototype.puncture = function () {
	this.flat = true;

}

Tire.prototype.repair = function () {
	this.flat = false;
}

module.exports = {
	Bike: Bike,
	Frame: Frame,
	Tire: Tire
}
