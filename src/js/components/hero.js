export default function hero() {
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