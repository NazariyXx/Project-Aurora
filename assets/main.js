$(document).ready(function() {
//  ----- AUTO SIZE OF HOW WORK HEAD BLOCKS -----
	let howWorkHeadBlock        = document.getElementsByClassName("how-work__head");
		howWorkHeadBlockSizes   = [],
		howWorkHeadBlockMaxSize = howWorkHeadBlock[0].offsetHeight;

	for (let i = 0; i<howWorkHeadBlock.length; i++) {
		howWorkHeadBlockSizes[i] = howWorkHeadBlock[i].offsetHeight;

		if(howWorkHeadBlockSizes[i] > howWorkHeadBlockMaxSize) {
			howWorkHeadBlockMaxSize = howWorkHeadBlockSizes[i];
		}
	};
	
	for (let i = 0; i<howWorkHeadBlock.length; i++) {
		howWorkHeadBlock[i].style.paddingTop    = (howWorkHeadBlockMaxSize-howWorkHeadBlockSizes[i])/2+'px';
		howWorkHeadBlock[i].style.paddingBottom = (howWorkHeadBlockMaxSize-howWorkHeadBlockSizes[i])/2+'px';
	};

//  ----- AUTO SIZE OF HOW WORK BLOCKS -----
	let howWorkBlock = document.getElementsByClassName("how-work__description"),
		blockSizes   = [],
		maxSize      = howWorkBlock[0].offsetHeight;

	if(document.documentElement.clientWidth>991) {
		for (let i = 0; i<howWorkBlock.length; i++) {
			blockSizes[i] = howWorkBlock[i].offsetHeight;
			if(blockSizes[i]>maxSize) {
				maxSize = blockSizes[i];
			};
		};
		for (let i = 0; i<howWorkBlock.length; i++) {
			howWorkBlock[i].style.paddingBottom = maxSize-blockSizes[i]+5+'px';
		};
	};

//  ----- SHOW/HIDE PROJECTS ------
	let getAll     = document.getElementById("btn-all"),
		getLogo    = document.getElementById("btn-logo"),
		getLanding = document.getElementById("btn-landing"),
		getWebsite = document.getElementById("btn-website"),
		getBlog    = document.getElementById("btn-blog");

	let typeAll = document.getElementsByClassName("projects__item");

	let projectsButtons = document.getElementsByClassName("projects__btn");

	function changesClasses(button, elem) {
		button.onclick = function() {
			for (let i=0; i<projectsButtons.length; i++) {
				projectsButtons[i].classList.remove('projects__btn--active');
			}
			this.classList.add('projects__btn--active');

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
	changesClasses(getAll, 'projects__item');
	changesClasses(getLogo, 'logo');
	changesClasses(getLanding, 'landing');
	changesClasses(getWebsite, 'website');

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

//  ----- HIDE MODAL -----
	let modalExit = document.getElementById("modalExit"),
		modalForm = $("#modalForm");

	modalExit.onclick = function() {
		modalForm.modal("hide");
	};
});