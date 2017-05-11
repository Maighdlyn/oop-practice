//Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
//
//Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
//
//P.S. Use typeof to check for a number here.

function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			obj[key] *= 2;
		}
	}
