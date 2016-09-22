class Session_Object {
	constructor(key, value){
		this.key = key;
		this.value = value;
	}
}

class Session_Storage {
	constructor(){
		this.vars = [];
	}
	set(key, value){
		sessionStorage.setItem(key, JSON.stringify(value));

		const Item = new Session_Object(key, value);
	
		this.vars.push(Item);
	}
	get(key){
		const item = sessionStorage.getItem(key);

		return JSON.parse(item);
	}
}

const Session = new Session_Storage();

export default Session;