let languageIcon = document.querySelector(".header__language-icon img");
let languageLang = document.querySelectorAll(".header__language-lang");
let languageLists = document.querySelectorAll(".header__language-lists");
let showLang = false;

function selectLangHand() {
	if (showLang) {
		languageLists.forEach(lists => {
			lists.style.cssText =
				"transform: scaleY(1); transform-origin: 50% 0%; transition: all .1s;opacity: 1;";
		});
		showLang = false;
	} else {
		languageLists.forEach(lists => {
			lists.style.cssText =
				"transform: scaleY(0); transform-origin: 50% 0%; transition: all .1s;opacity: 0;";
		});
		showLang = true;
	}
}
let sliderNewsImages = document.querySelectorAll(".sliderNews__images ");

let wrapper = document.querySelector(".wrapper");
sliderNewsImages.forEach(images => {
	images.addEventListener("mouseover", () => {
		let child = images.children;
		let text = child[0];
		text.style.cssText =
			"transition: all 1s;opacity: .8;bottom: 60px;z-index:20;";
		let img = child[1];
		img.style.cssText =
			"border-bottom-right-radius: 40px;border-top-left-radius: 40px;transition: all 1s;filter: blur(2px);";
	});
	images.addEventListener("mouseout", () => {
		let child = images.children;
		let text = child[0];
		text.style.cssText =
			"transition: all 1s;opacity: 0;bottom: 0px;z-index:20;";
		let img = child[1];
		img.style.cssText =
			"border-bottom-right-radius: 5px;border-top-left-radius: 5px;transition: all 1s;filter: blur(0px);";
	});
	
});
// ;
