import _ from "underscore";

class App_Router {
	constructor(){
		this.routes = [];
	    this.mode = null;
    	this.root = '/'	;
	}
	run() {
		this.getPathname();
	}
	route(pathName, controller) {
  		const route = {
  			pathName: pathName,
  			controller: controller
  		};

	  	this.routes.push(route);

	}
	checkRoute(route) {
		let search = null;
		let array = this.routes;

		search = _.findWhere(array, {pathName: route});
		
		if(search !== undefined){
			return search;
		} else {
			return undefined;
		}
	}
	getPathname() {
		let pathName = '';

		pathName = window.location.pathname;

		let route = this.checkRoute(pathName);

		if (route !== undefined){
			route.controller(route);
		}
	}
};

export default App_Router;