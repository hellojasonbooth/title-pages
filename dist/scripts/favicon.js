

   var faviconImages = [
	"img/img-01.png", "img/img-02.png", "img/img-03.png", "img/img-04.png",
	"img/img-05.png", "img/img-06.png", "img/img-07.png", "img/img-08.png",
	"img/img-09.png", "img/img-10.png", "img/img-11.png", "img/img-12.png",
	"img/img-13.png", "img/img-14.png", "img/img-15.png", "img/img-16.png",
	"img/img-17.png", "img/img-18.png"
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
 






