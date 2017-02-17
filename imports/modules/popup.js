import cookie from './cookie.js';
import $ from 'jquery-slim';

const popup = {
    init(){
        this.renderContainer();
        this.cookieName = 'Popup';
        this.events();

        setTimeout(() => {
        	this.checkCookie();
        }, 3000);

    },
    renderContainer() {

        /*create container with book now button*/
        const container = document.createElement('div');

        $(container).attr({
            id: 'popup-call-to-action',
            class: 'app-module popup'
        });

        const content = document.createElement('div');

        $(content).attr({
            class: 'content'
        });

        const close = document.createElement('div');

        $(close).attr({
            class: 'close'
        });

        close.innerText = '✕';

        const button = document.createElement('a');

        $(button).attr({
            class: 'button',
            href: '/schedule'
        });

        button.innerText = 'Book Now';

        /*append elements*/
        content.appendChild(button);
        content.appendChild(close);
        container.appendChild(content);

        this.container = container;

        $('#canvas').after(container);
    },
    events(){
        this.closePopupWhenClicked();
    },
    showPopup(){
    	$(this.container).addClass("is-rendered");
    },
    checkCookie(){
    	const newsletter = {};

    	let hasBeenVisible = false;
 
    	hasBeenVisible = cookie.get(this.cookieName);

    	if (hasBeenVisible == undefined) {
    		this.showPopup();
    		return false;
    	}
    },
    closePopupWhenClicked(){
        $(".app-module.popup .close").on("click", () => {
            this.setCookies();
            $(this.container).removeClass("is-rendered");
        });

        $(".app-module.popup .button").on("click", () => {
            this.setCookies();
        });
    },
    setCookies() {
    	cookie.set(this.cookieName, true, 365);
    }
};

export default popup;
