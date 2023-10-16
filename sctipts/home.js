let languageIcon = document.querySelector(".header__language-icon img");
let languageLang = document.querySelectorAll(".header__language-lang");
// console.log(languageIcon);
// console.log(languageLang);
let languageLists = document.querySelectorAll(".header__language-lists");
let languageSelect = document.createElement("li");
let showLang = false;

function selectLangHand() {
	languageLists.forEach(lists => {
		lists.style.cssText =
			"transform: scaleY(1); transform-origin: 100% 0%; transition: all 1s;";
	});
}
