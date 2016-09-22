// import Element from "./element";

class DOM_Cache {
	constructor(query) {
		this.head = document.querySelectorAll('head');
		this.body = document.querySelectorAll('body');
	}
	find (query) {
		let element = null;

		element = this.body[0].querySelectorAll(query);

		if (element !== undefined) {
			return element;
		}
	}
}

const DOM = new DOM_Cache();

export default DOM;
