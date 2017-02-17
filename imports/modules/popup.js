import cookie from './cookie.js';
import session from './session.js';
import $ from 'jquery-slim';

const popup = {
    init(){
        this.renderContainer();
        this.displayName = 'Mizu_Book_Now_Popup';
        this.events();

        setTimeout(() => {
            this.checkSession();
        }, 10000);

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
    checkSession() {
        let hasBeenVisible = false;
 
        hasBeenVisible = session.get(this.displayName);

        if (!hasBeenVisible) {
            this.showPopup();
            return false;
        }
    },
    closePopupWhenClicked(){
        $(".app-module.popup .close").on("click", () => {
            session.set(this.displayName, true);
            $(this.container).removeClass("is-rendered");
        });

        $(".app-module.popup .button").on("click", () => {
            session.set(this.displayName, true);
        });
    }
};

export default popup;
