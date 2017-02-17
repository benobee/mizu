import $ from 'jquery-slim';

const banner = {
  init(){
    this.bannerText = $("#page-title-wrapper");
    this.fadeInBannerText();
  },
  fadeInBannerText(){
      if (this.bannerText.length > 0){
        setTimeout(() => {

          this.bannerText.addClass("is-loaded");

        }, 500);
      }
  }
}

export default banner;