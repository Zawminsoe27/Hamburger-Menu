const hamburgerMenuContainerTag = document.querySelector(".hamburgerMenuContainer");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const overlayMenuTag = document.querySelector(".overlayMenu");


const liTags = document.querySelectorAll("li")
hamburgerMenuContainerTag.addEventListener("click", () => {
	line2.classList.toggle("hide2");
	line1.classList.toggle("rotatePlus45");
	line3.classList.toggle("rotateMinus45");
overlayMenuTag.classList.toggle("showOverlayMenu");
for (let i = 0; i < liTags.length; i++) {
	liTags[i].classList.toggle("moveLiTags")
	
}
})