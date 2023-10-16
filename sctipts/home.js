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
