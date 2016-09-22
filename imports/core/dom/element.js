import _ from 'underscore';

//////////////////////////////////////////////////
// lightweight DOM selector with only the most sought
// after methods that snake oil salesman will be trying 
// to con you with for years
//////////////////////////////////////////////////

class Element {
	constructor(query){
		this.root = document.querySelectorAll(query);
		this.addClass = this.addClass;
		this.removeClass = this.removeClass;
		this.find = this.find;
		this.toArray = this.toArray;
		this.extend();
	}
	addClass(className) {
		_.each(this, (i) => {
			i.className += ' ' + className;
		});				
	}
	removeClass(className) {
		_.each(this, (i) => {
			let currentClass = i.getAttribute('class');

			let newClass = currentClass.replace(className, '');

			i.className = ' ' + newClass;
		});
	}
	find(query) {
		let element = null;

		if(_.isObject(query)){
			element = query;
		} else {
			element = this.root[0].querySelectorAll(query);
		}

		if (element !== undefined) {			
			return element;
		}
	}
	toArray(){
		let array = _.map(this, (i) => {
			return {node: i};
		});
		return array;
	}
	extend(){
		return _.extend(this, this.root);
	}
};

//////////////////////////////////////////////////
// get this delinquent out of the house to do 
// something useful. Tough Love, you know?
//////////////////////////////////////////////////

const $ = (query) => {
	if (query !== undefined) {
		return new Element(query);
	}
};

export default $;