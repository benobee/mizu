class Browser_Cookies {
	constructor(){
		this.set = this.set;
		this.get = this.get;
	}
	set(cname, cvalue, exdays){
	    let d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));

	    let expires = "expires="+ d.toUTCString();
	    document.cookie = cname + "=" + cvalue + "; " + expires;		
	}
	get(cname) {
	    let name = cname + "=";
	    let ca = document.cookie.split(';');
	    for(let i = 0; i < ca.length; i++) {
	        let c = ca[i];
	        while (c.charAt(0) == ' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length, c.length);
	        }
	    }
	}
}

const cookie = new Browser_Cookies();

export default cookie;