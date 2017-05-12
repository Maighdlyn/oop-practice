class Bike {
	constructor(name, price) {
		const DefaultRings = [3, 7]
		const DefaultBreaks = {
			front: true,
			back: true
		}
		this.name = name;
		this.price = price;
		this.tires = [new Tire(), new Tire()];
		this.frame = new Frame();
		this.moving = false;
		this.brakes = DefaultBreaks;
		this.rings = DefaultRings;
		//		this.shocks = defaultShocks;
	}
	gearSpeeds() {
		return this.rings[0] * this.rings[1];
	}
}

class Frame {
	constructor(color = 'black', size = 55, style = 'street') {
		this.color = color;
		this.size = size;
		this.style = style;
	}
}

class Tire {
	constructor(diameter = 22, type = 'street') {
		this.diameter = diameter;
		this.type = type;
		this.flat = false;
	}
}

class MountainBike extends Bike {
	constructor() {
		super();
		this.frame.style = 'mountain';
		this.tires[0].type = 'dirt';
		this.tires[1].type = 'dirt';
		this.shocks = 20;
	}
	adjustShocks(x) {
		this.shocks = x;
	}
}

class BMXBike extends Bike {
	constructor() {
		super();
		this.brakes.front = false;
		this.tires[0].diameter = 20;
		this.tires[1].diameter = 20;
	}
}

class RacingBike extends Bike {
	constructor() {
		super();
		this.frame.style = 'racing';
		this.tires[0].type = 'road';
		this.tires[1].type = 'road';
		this.rings = [3, 10];
	}
}

module.exports = {
	Bike: Bike,
	MountainBike: MountainBike,
	BMXBike: BMXBike,
	RacingBike: RacingBike,
}
