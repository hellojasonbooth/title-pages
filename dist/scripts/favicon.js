

var faviconImages = [
	"../img/favicon/img-01.png"
  ],
    
imageCounter = 0

const head = document.querySelector('head');

let currentLink = head.querySelector("link[rel='shortcut icon']");

// setInterval(function() {
// 	const newLink = document.createElement("link");
// 	newLink.setAttribute("rel", "icon");
// 	newLink.setAttribute("type", "image/png");
// 	newLink.setAttribute("src", faviconImages[imageCounter]);

// 	head.replaceChild(newLink, currentLink)
// 	currentLink = head.querySelector("link[rel='icon']");
		
// 	if(imageCounter == faviconImages.length -1) {
// 		imageCounter = 0
// 	} else {
// 		imageCounter++
// 	}
// }, 250)

const newLink = document.createElement("link");
	newLink.setAttribute("rel", "icon");
	newLink.setAttribute("type", "image/png");
	newLink.setAttribute("href", faviconImages);

	head.replaceChild(newLink, currentLink)
	currentLink = head.querySelector("link[rel='icon']");






