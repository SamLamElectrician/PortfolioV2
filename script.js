portfolio = {};

portfolio.hamburger = () => {
	const button = document.querySelector('.menu-collapsed');
	const slideshow = document.getElementById('slideshow');
	const map = document.getElementById('map');
	button.addEventListener('click', () => {
		button.classList.toggle('menu-expanded');
		slideshow.classList.toggle('relative');
		map.classList.toggle('relative');
	});
};

portfolio.typeWriter = () => {
	const text = document.querySelector('.secondText');

	const textAnimation = () => {
		setTimeout(() => {
			text.textContent = 'Gamer';
		}, 0);
		setTimeout(() => {
			text.textContent = 'Electrician';
		}, 3000);
		setTimeout(() => {
			text.textContent = 'Weeb';
		}, 6000);
		setTimeout(() => {
			text.textContent = 'Powerlifter';
		}, 9000);
		setTimeout(() => {
			text.textContent = 'Curious';
		}, 12000);
	};
	textAnimation();
	setInterval(textAnimation, 15000);
};

portfolio.slideshow = () => {
	const slides = document.querySelectorAll('.slide');

	// loop through slides and set each slides translateX
	slides.forEach((slide, indx) => {
		slide.style.transform = `translateX(${indx * 100}%)`;
	});

	// select next slide button
	const nextSlide = document.querySelector('.btn-next');

	// current slide counter
	let curSlide = 0;
	// maximum number of slides
	let maxSlide = slides.length - 1;

	// add event listener and navigation functionality
	nextSlide.addEventListener('click', function () {
		// check if current slide is the last and reset current slide
		if (curSlide === maxSlide) {
			curSlide = 0;
		} else {
			curSlide++;
		}

		//   move slide by -100%
		slides.forEach((slide, indx) => {
			slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
		});
	});

	// select next slide button
	const prevSlide = document.querySelector('.btn-prev');

	// add event listener and navigation functionality
	prevSlide.addEventListener('click', function () {
		// check if current slide is the first and reset current slide to last
		if (curSlide === 0) {
			curSlide = maxSlide;
		} else {
			curSlide--;
		}

		//   move slide by 100%
		slides.forEach((slide, indx) => {
			slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
		});
	});
};

portfolio.email = () => {
	const formContainer = document.getElementById('formContainer');
	const form = document.getElementById('contact');
	const thankyou = document.getElementById('thanks');
	const newContact = document.getElementById('newForm');
	form.addEventListener('submit', function (event) {
		formContainer.style.display = 'none';
		thankyou.style.display = 'block';
		event.preventDefault();
		emailjs
			.sendForm(
				'service_1xou5c7',
				'template_p68bvop',
				event.target,
				'8X5aCUiGHuFKNdN71'
			)
			.then(() => {})
			.catch(() => {
				alert(
					'Email Service is temporarily unavailable. Please contact me on Sammylam505@gmail.com'
				);
			});
	});
	newContact.addEventListener('click', function () {
		form.reset();
		formContainer.style.display = 'block';
		thankyou.style.display = 'none';
	});
};

portfolio.init = () => {
	portfolio.hamburger();
	portfolio.typeWriter();
	portfolio.slideshow();
	portfolio.email();
};

portfolio.init();
