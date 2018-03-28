export function addClass(el,className){
	if(hasClass(el,className)){
		return;
	}
	var newClass = el.className.split(' ');
	newClass.push(calssName);
	newClass= newClass.join(' ');
	el.className = newClass;
	
}


export function hasClass(el,className){
	let reg = new RegExp('(^|\\s)' +className + '(\\s|$)');
	return reg.test(el.className);
}

 