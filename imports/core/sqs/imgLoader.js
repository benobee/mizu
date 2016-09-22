import $ from 'jquery';

const sqs_image = {

    images : document.querySelectorAll('img[data-src]' ),

    fit ( image ) {
    	$(image).wrap('<div class="content-fit"></div>');
    },

    fill ( image ) {
    	$(image).wrap('<div class="content-fill"></div>');
    },

    loadAllImages () {

		var images = this.images;
		for (var i = 0; i < images.length; i++) {
		    ImageLoader.load(images[i], {load: true});
		}

    	document.addEventListener('DOMContentLoaded', this.loadAllImages);
        window.addEventListener('resize', this.loadAllImages);

    }
};

export default sqs_image;