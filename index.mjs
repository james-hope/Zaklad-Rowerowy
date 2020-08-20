import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

const firstSlider = {
	a11y: true,
	autoplay: {
		delay: 5000,
	},
	// freeMode: true,
	lazy: true,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
	},
	breakpoints: {
		1025: {
			slidesPerView: 2,
			spaceBetween: 10
		},
		1300: {
			slidesPerView: 3,
			spaceBetween: 20
		},
	}
};