import gsap, { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import SplitText from '../libs/SplitText.min';

export default function hero() {
	const $heroTopTitle = document.querySelector('.heroTopTitle');

	if ($heroTopTitle) {
		const titleSplitedText = new SplitText('.heroTopTitle');

		gsap.from(titleSplitedText.chars, {
			stagger: 0.05,
			rotate: 180,
			y: '100%',
			opacity: 0,
			scale: 0,
			onComplete: () => {
				titleSplitedText.revert();
			},
		});
	}

	const $leftCloud = document.querySelector('.leftCloud');
	const $rightCloud = document.querySelector('.rightCloud');

	if ($leftCloud && $rightCloud) {
		gsap.registerPlugin(ScrollTrigger);

		const commonOptions = {
			start: 'top center',
			end: 'bottom top',
			scrub: true,
		};

		ScrollTrigger.create({
			...commonOptions,
			trigger: $leftCloud,
			animation: gsap.to($leftCloud, {
				x: '-100%',
			}),
		});

		ScrollTrigger.create({
			...commonOptions,
			trigger: $rightCloud,
			animation: gsap.to($rightCloud, {
				x: '100%',
			}),
		});
	}

	const $arrowDown = document.querySelector('.heroArrowDown');
	const $heroCottage = document.querySelector('.heroCottage');

	if ($arrowDown && $heroCottage) {
		gsap.registerPlugin(ScrollToPlugin);

		$arrowDown.addEventListener('click', () => {
			gsap.to(window, {
				scrollTo: {
					y: $heroCottage,
					offsetY: 100,
				},
			});
		});
	}

	const $checkboxContainer = document.querySelector('.heroCheckboxContainer');

	if ($checkboxContainer) {
		$checkboxContainer.addEventListener('click', (event) => {
			const $closestCheckboxButton = event.target.closest('.heroCheckboxButton');

			if ($closestCheckboxButton) {
				const ariaCheckedValue = $closestCheckboxButton.getAttribute('aria-checked');
				const newAriaCheckedValue = (ariaCheckedValue === 'false') ? 'true' : 'false';
				$closestCheckboxButton.setAttribute('aria-checked', newAriaCheckedValue);

				const $closestCheckbox = $closestCheckboxButton.closest('.heroCheckbox');

				if ($closestCheckbox) {
					$closestCheckbox.classList.toggle('hero_cottage_checkboxes__item--checked_mod');
				}
			}
		});
	}
}
