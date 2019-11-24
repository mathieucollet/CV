if (window.matchMedia('screen').matches) {
	AOS.init({
		offset: 300,
		duration: 1000,
		once: true
	});
}

var cornerLink = document.querySelector('.cornerLink');
var sideContact = document.querySelector('.sideContact');

document.addEventListener(
	'wheel',
	evt => {
		var cornerShow =
			window.scrollY > 20 && window.scrollMaxY - window.scrollY > 400;
		var sideShow =
			window.scrollY > 100 && window.scrollMaxY - window.scrollY > 400;

		cornerLink.classList['replace'](
			cornerShow ? 'cornerInvisible' : 'cornerVisible',
			cornerShow ? 'cornerVisible' : 'cornerInvisible'
		);

		sideContact.classList['replace'](
			sideShow ? 'sideInvisible' : 'sideVisible',
			sideShow ? 'sideVisible' : 'sideInvisible'
		);
	},
	{
		capture: false,
		passive: true
	}
);
