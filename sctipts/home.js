// slider
let Slider = document.querySelector(".introduction__slider");
let SliderImages = document.querySelectorAll(".introduction__slider-photo");
let sliderItem = document.querySelectorAll(".introduction__slider-item");

let showList = document.querySelector(".navItems-link");
let listNav = document.querySelector(".navItems__lists");

let showLists = document.querySelector(".nav-link");
let listsNav = document.querySelector(".nav__lists");

let shows = true;

showLists.addEventListener("click", () => {
	if (shows) {
		listsNav.style.cssText =
			"height: auto;width:120px;transform: scale(1);opacity: 1;";
		shows = false;
	} else {
		listsNav.style.cssText =
			"height: 0;width:120px;transform: scale(0);opacity: 0;";
		shows = true;
	}
});

let show = true;
showList.addEventListener("click", () => {
	if (show) {
		listNav.style.cssText =
			"height: auto;width:120px;transform: scale(1);opacity: 1;";
		show = false;
	} else {
		listNav.style.cssText =
			"height: 0;width:120px;transform: scale(0);opacity: 0;";
		show = true;
	}
});

let index = 0;
function autoChange() {
	setTimeout(autoChange, 5000);
	var pic;
	for (pic = 0; pic < sliderItem.length; pic++) {
		sliderItem[pic].style.opacity = "0";
		sliderItem[pic].style.transition = "all 2s";
	}
	index++;
	if (index > sliderItem.length) {
		index = 1;
	}
	sliderItem[index - 1].style.opacity = "1";
}
autoChange();
