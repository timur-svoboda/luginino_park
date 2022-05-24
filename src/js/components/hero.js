import gsap from 'gsap/all';
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
