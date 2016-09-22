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

        //execute
        this.moduleInit();
    }
    moduleInit(){
        this.banner.init();
    }
};

const App = new App_Build();
window.App = App;




