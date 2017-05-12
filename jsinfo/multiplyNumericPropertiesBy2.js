//Exercise can be found at http://javascript.info/object#multiply-numeric-properties-by-2

function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			obj[key] *= 2;
		}
	}
