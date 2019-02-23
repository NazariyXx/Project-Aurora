$(document).ready(function() {
//  ----- AUTO SIZE OF HOW WORK BLOCKS -----
	let howWorkBlock = document.getElementsByClassName("how-work__description"),
		blockSizes = [],
		maxSize = howWorkBlock[0].offsetHeight;

	if(document.documentElement.clientWidth>991) {
		for (let i = 0; i<howWorkBlock.length; i++) {
			blockSizes[i] = howWorkBlock[i].offsetHeight;
			if(blockSizes[i]>maxSize) {
				maxSize = blockSizes[i];
			}
		}
		for (let i = 0; i<howWorkBlock.length; i++) {
			howWorkBlock[i].style.paddingBottom = maxSize-blockSizes[i]+5+'px';
		}
	};

//  ----- SHOW/HIDE PROJECTS ------
	let getAll     = document.getElementById("btn-all"),
		getLogo    = document.getElementById("btn-logo"),
		getLanding = document.getElementById("btn-landing"),
		getWebsite = document.getElementById("btn-website"),
		getBlog    = document.getElementById("btn-blog");

	let typeAll = document.getElementsByClassName("projects__item");

	getAll.onclick = function() {
		for (let i=0; i<typeAll.length; i++) {
			typeAll[i].classList.remove('show');
			typeAll[i].classList.remove('hide');

			typeAll[i].classList.add('show');
		};
	};

	function changesClasses(button, elem) {
		button.onclick = function() {
			for (let i=0; i<typeAll.length; i++) {
				typeAll[i].classList.remove('show');
				typeAll[i].classList.remove('hide');

				typeAll[i].classList.add('hide');
				if(typeAll[i].classList.contains(elem)) {
					typeAll[i].classList.remove('hide');
					typeAll[i].classList.add('show');
				};
			};
		};
	};

	changesClasses(getLogo, 'logo');
	changesClasses(getLanding, 'landing');
	changesClasses(getWebsite, 'website');
	changesClasses(getBlog, 'blog');

//  ----- SCROLL TO TOP -----
	let scrollPosition = window.pageYOffset,
		upToTopBlock   = document.getElementsByClassName('up-to-top');

	window.onscroll = function() {
		scrollPosition = window.pageYOffset;
		if(scrollPosition>=1250) {
			upToTopBlock[0].style.bottom = '20px';
		} else {
			upToTopBlock[0].style.bottom = '-60px';
		};
	};

});