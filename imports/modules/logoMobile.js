import $ from 'jquery-slim';

const logoMobile = {
	init(){
		this.cacheDOM();
		this.injectIntoHeader();
	},
	cacheDOM(){
		this.logo = $("#banner-wrapper");
		this.target = $("#mobile-navigation ul");
	},
	injectIntoHeader(){
		const mobileLogo = $(this.logo).clone();

		$(this.target).before(mobileLogo);
	}
}

export default logoMobile;