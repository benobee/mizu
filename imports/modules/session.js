class Browser_Session {
	constructor(){
		this.set = this.set;
		this.get = this.get;
	}
	set(key, value){
	    sessionStorage.setItem(key, value);
	}
	get(key) {
		return sessionStorage.getItem(key);
	}
}

const session = new Browser_Session();

export default session;