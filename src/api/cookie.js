export function setCookie(kay, value, days) {
	var days = days;
	var exp = new Date();
	exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
	document.cookie = kay + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

export function getCookie(value) {
	if(document.cookie.length > 0) {
		let cStar = document.cookie.indexOf(value + "=");
		if(cStar != -1) {
			cStar = cStar + value.length + 1;
			let cEnd = document.cookie.indexOf(";", cStar);
			if(cEnd == -1) { cEnd = document.cookie.length; }
			return unescape(document.cookie.substring(cStar, cEnd));
		}

	}
}

export function delCookie(value) {
	setCookie(value, "", -1);
}