import throttle from 'lodash.throttle';

export default function header() {
	const $menuTrigger = document.querySelector('.menuTrigger');
	const $menu = document.querySelector('.menu');

	if ($menuTrigger) {
		$menuTrigger.addEventListener('click', () => {
			$menuTrigger.classList.toggle('menu_trigger--active_mod');
			$menu.classList.toggle('menu--active_mod');
			document.body.classList.toggle('body--menu_active_mod');
		});
	}

	const $header = document.querySelector('.header');

	if ($header) {
		const yAxisStart = 0;
		const throttleTimeout = 100;
		const fixedMod = 'header--fixed_mod';

		document.addEventListener('scroll', throttle(() => {
			const isDocumentScrolled = window.scrollY > yAxisStart;
			const doesHeaderHaveFixedMod = $header.classList.contains(fixedMod);

			if (isDocumentScrolled && !doesHeaderHaveFixedMod) {
				$header.classList.add(fixedMod);
			} else if (!isDocumentScrolled && doesHeaderHaveFixedMod) {
				$header.classList.remove(fixedMod);
			}
		}), throttleTimeout);
	}
}
