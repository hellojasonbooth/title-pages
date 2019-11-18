

var faviconImages = [
	"img-01.png", "img-02.png", "img-03.png", "img-04.png",
	"img-05.png", "img-06.png", "img-07.png", "img-08.png"
  ],
    
imageCounter = 0

const head = document.querySelector('head');

let currentLink = head.querySelector("link[rel='shortcut icon']");

setInterval(function() {
	const newLink = document.createElement("link");
	newLink.setAttribute("rel", "icon");
	newLink.setAttribute("type", "image/png");
	newLink.setAttribute("href", faviconImages[imageCounter]);

	head.replaceChild(newLink, currentLink)
	currentLink = head.querySelector("link[rel='icon']");
		
	if(imageCounter == faviconImages.length -1) {
	imageCounter = 0
  } else {
	imageCounter++
  }
}, 250)






