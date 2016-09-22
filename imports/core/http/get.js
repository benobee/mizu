import $ from 'jquery';

class Ajax_$ {
	constructor(){
		this.get = this.get;
	}
	get(url, options){
        const data = $.ajax({
            url: url,
            data: options,
            dataType: "jsonp",
            success: (response) => {
                return response;
            },
            error: (error) => {
                return "dude_error: " + error;
            }
        });

        return $.when(data).done((result)=>{
            return result;
        });
	}
};

const HTTP = new Ajax_$();

export default HTTP;