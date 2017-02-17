import { sqs, Site } from './imports/core/index';
import * as modules from './imports/modules/index';
 
const css = require("./main.less");

class App_Build {
    constructor() {
        //sqs methods	
        this.SQS = sqs;
        //site data
        this.site = Site;

        //modules
        this.banner = modules.banner;
        this.logoMobile = modules.logoMobile;
        this.popup = modules.popup;

        //execute
        this.moduleInit();
    }
    moduleInit(){
        this.banner.init();
        this.logoMobile.init();
        this.popup.init();
    }
};

const App = new App_Build();
window.App = App;




