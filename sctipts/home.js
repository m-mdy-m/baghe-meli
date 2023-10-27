// slider
let Slider = document.querySelector(".introduction__slider");
let SliderImages = document.querySelectorAll(".introduction__slider-photo");
let sliderItem = document.querySelectorAll(".introduction__slider-item");

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