function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function copy(ary) {
	let newAry = []
	for(const item of ary) {
		let value = item;
		if(Object.prototype.toString.call(value) === "[object Object]") value = copyObj(value);
		if(Object.prototype.toString.call(value) === "[object Array]") value = copyAry(value);
		newAry.push(value);
	}
	return newAry;
}

function copyObj(obj) {
	let newObj = {};
	for(const key in obj) {
		let value = obj[key];
		if(Object.prototype.toString.call(value) === "[object Object]") value = copyObj(value);
		if(Object.prototype.toString.call(value) === "[object Array]") value = copyAry(value);
		newObj[key] = value;
	}
	return newObj;
}

export function copyAry(options) {
	return copy(options)
}

export function shuffle(arr) {
	let newArr = arr;
	for(let i = 0; i < newArr.length; i++) {
		let j = getRandomInt(0, i);
		let t = newArr[i];
		newArr[i] = newArr[j];
		newArr[j] = t;
	}
	return newArr
}