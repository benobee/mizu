import $ from 'jquery';

const banner = {
	init(){
		this.bannerText = $("#page-title-wrapper");
		this.fadeInBannerText();
    
	},
  fadeInBannerText(){
    console.log(this.bannerText.length);
      if (this.bannerText.length > 0){
        setTimeout(function(){
        	$("#page-title-wrapper").addClass("is-loaded");

        }, 500);
      }
  }
}

export default banner;