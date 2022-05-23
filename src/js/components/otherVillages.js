import Swiper, { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

export default function otherVillages() {
	const swiperElement = document.querySelector('.otherVillagesSwiper');
	const prevButton = document.querySelector('.otherVillagesSwiperPrev');
	const nextButton = document.querySelector('.otherVillagesSwiperNext');

	if (swiperElement && prevButton && nextButton) {
		const swiper = new Swiper(swiperElement, {
			slidesPerView: 1,
			modules: [Pagination],
			pagination: {
				el: '.otherVillagesPagination',
				bulletClass: 'other_villages__bullet',
				bulletActiveClass: 'other_villages__bullet--active',
				clickable: true,
			},
			breakpoints: {
				1200: {
					slidesPerView: 3,
					spaceBetween: 76,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
			},
		});

		prevButton.addEventListener('click', () => {
			swiper.slidePrev();
		});

		nextButton.addEventListener('click', () => {
			swiper.slideNext();
		});
	}
}
