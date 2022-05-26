import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const animEl = () => {
	gsap.registerPlugin(ScrollTrigger);
	const $fadeEl = document.querySelectorAll('.fadeEl');
	if (typeof $fadeEl !== 'undefined' && $fadeEl.length) {
		console.log($fadeEl);

		gsap.set($fadeEl, {
			y: 100,
			opacity: 0,
		});

		setTimeout(() => {
			ScrollTrigger.batch($fadeEl, {
				start: '15% bottom',
				onEnter: (batch) => {
					gsap.to(batch, {
						opacity: 1,
						y: 0,
						stagger: 0.05,
						ease: 'none',
					});
				},
			});
		}, 100);
	}
};

export default animEl;
