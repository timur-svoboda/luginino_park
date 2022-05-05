import Swiper, { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function showcase() {
	const exteriorSwipers = new Swiper('.exteriorSwiper', {
		modules: [Pagination, Navigation],
		pagination: {
			el: '.previewExteriorPagination',
			bulletClass: 'preview__exterior_swiper_bullet',
			bulletActiveClass: 'preview__exterior_swiper_bullet--active_mod',
			clickable: true,
		},
		navigation: {
			prevEl: '.previewExteriorPrev',
			nextEl: '.previewExteriorNext',
			disabledClass: 'preview__exterior_nav_button--disabled_mod',
		},
	});

	const $interiorSwiperContainers = Array.from(document.querySelectorAll('.interiorSwiperContainer'));

	$interiorSwiperContainers.forEach($container => {
		const $interiorSwiper = $container.querySelector('.interiorSwiper');
		const $interiorPagination = $container.querySelector('.interiorPagination');
		const $paginationButtons = Array.from($container.querySelectorAll('.interiorPaginationButton'));

		const interiorSwiper = new Swiper($interiorSwiper, {
			allowTouchMove: false,
		});

		if ($interiorSwiper && $interiorPagination && $paginationButtons.length > 0) {
			const activeMod = 'preview__interior_pagination_button--active_mod';

			$interiorPagination.addEventListener('click', (event) => {
				const $chosenButton = event.target.closest('.interiorPaginationButton');

				if ($chosenButton && !$chosenButton.classList.contains(activeMod)) {
					const $activeButton = $interiorPagination.querySelector(`.${activeMod}`);

					if ($activeButton) {
						$activeButton.classList.remove(activeMod);
					}

					$chosenButton.classList.add(activeMod);

					const chosenButtonIndex = $paginationButtons.indexOf($chosenButton);
					interiorSwiper.slideTo(chosenButtonIndex);
				}
			});
		}
	});
}
