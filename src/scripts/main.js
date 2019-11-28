const bodyTag = document.querySelector('body')

// stickers
let number = 0

const stickers = [
   "img/bottle.svg",
   "img/globe.svg",
   "img/lightbulb.svg",
   "img/planets.svg",
   "img/protest.svg",
   "img/timer.svg",
   "img/water.svg"
]

const stickerTag = document.querySelector("div.stickers")

const addSticker = function (x, y) {

   const num = Math.floor(Math.random() * 45) + 1
   const randomNum = num * (Math.random() < 0.5 ? -1 : 1)

   const img = document.createElement("img")
   img.setAttribute("src", stickers[number])
   img.classList.add("sticker-slapped")
   // cover the most common browsers
   img.style.webkitTransform = "rotate(" + randomNum + "deg) translateX(" + (-50) + "%) translateY(" + (-50) + "%)"
   img.style.MozTransform = "rotate(" + randomNum + "deg) translateX(" + (-50) + "%) translateY(" + (-50) + "%)"
   img.style.msTransform = "rotate(" + randomNum + "deg) translateX(" + (-50) + "%) translateY(" + (-50) + "%)"
   img.style.OTransform = "rotate(" + randomNum + "deg) translateX(" + (-50) + "%) translateY(" + (-50) + "%)"
   img.style.transform = "rotate(" + randomNum + "deg) translateX(" + (-50) + "%) translateY(" + (-50) + "%)"

   stickerTag.appendChild(img)

   img.style.left = x + "px"
   img.style.top = y + "px"

   number = number + 1

   if (number > stickers.length - 1) {
      number = 0
   }

   setTimeout(function () {
      img.style.display = 'none'
   }, 8000)


}


// add stickers desktop
stickerTag.addEventListener("click", function (event) {
   event.preventDefault()
   if (!menuOpen) {
      addSticker(event.pageX, event.pageY)
    }
})


// add stickers on mobile
stickerTag.addEventListener("touchend", function (event) {
   event.preventDefault()
   addSticker(event.pageX, event.pageY)
 })




// menu toggler
const burgerTag = document.querySelector('div.burger-menu')
const menuToggleTag = document.querySelector('header')
// menu
const menuTag = document.querySelector('div.menu')

const bg = document.querySelector('body')

// if the menu is open we need to 
// return a function as true
let menuOpen = false

menuToggleTag.addEventListener('click', function() {

   menuTag.classList.toggle('open')
   burgerTag.classList.toggle('active')
   bodyTag.classList.toggle('hidden')

     if (menuTag.classList.contains('open')) {
         menuOpen = true
         console.log('true')
         footerTag.classList.add('blurred')
     } else {
         menuOpen = false
         console.log('false')
         footerTag.classList.remove('blurred')
     }

   // this is where we can add the blur to elements
   // when menu is open and remove the blur when
   // menu is closed
   // blur some stuff
   const blurredStickerTag = document.querySelectorAll('div.stickers img')
   const blurredLogoTag = document.querySelectorAll('h1')
 

   blurredStickerTag.forEach(tag => {

      if (menuTag.classList.contains('open') && window.innerWidth > 900) {
         tag.classList.add('blurred')

      } else {
         tag.classList.remove('blurred')
      }

     })

     blurredLogoTag.forEach(tag => {
         if (menuTag.classList.contains('open') && window.innerWidth > 900) {
            tag.classList.add('blurred-title')
         } else {
            tag.classList.remove('blurred-title')
         }
     })


})



// animate the footer up on page load
// with a delay

const footerTag = document.querySelector('footer')

document.addEventListener("DOMContentLoaded", function(event) {

   setTimeout(function () {
    
      footerTag.classList.add('animated')
    
   }, 1300)

})




// menu burger is tracked by the mouse movement
const areaTag = document.querySelector('header')

const menuBurgerTag = areaTag.querySelector('div.burger-menu')
  
  
  let mouseX = areaTag.offsetLeft + (areaTag.clientWidth / 2)
  let mouseY = areaTag.offsetTop + (areaTag.clientHeight / 2)
  
  let burgerX = areaTag.offsetLeft + (areaTag.clientWidth / 2)
  let burgerY = areaTag.offsetTop + (areaTag.clientHeight / 2)
  
  
  areaTag.addEventListener("mousemove", function (event) {
   	mouseX = event.clientX
      mouseY = event.clientY
    
  })
  
   areaTag.addEventListener("mouseleave", function () {
      mouseX = areaTag.offsetLeft + (areaTag.clientWidth / 2)
  	   mouseY = areaTag.offsetTop + (areaTag.clientHeight / 2)
  })
  
  const handleResize = function () {
      
      burgerX = areaTag.offsetLeft + (areaTag.clientWidth / 2)
      burgerY = areaTag.offsetTop + (areaTag.clientHeight / 2)
         
      mouseX = areaTag.offsetLeft + (areaTag.clientWidth / 2)
      mouseY = areaTag.offsetTop + (areaTag.clientHeight / 2)

   }

  	let speed = 0.2

  	function animateBurger() {
    	let distX = mouseX - burgerX
    	let distY = mouseY - burgerY

    	burgerX = burgerX + (distX * speed)
    	burgerY = burgerY + (distY * speed)

        menuBurgerTag.style.left = (burgerX - areaTag.offsetLeft) + 'px'
        menuBurgerTag.style.top = burgerY + 'px'

    	requestAnimationFrame(animateBurger)
    }

    window.addEventListener('resize', handleResize, animateBurger)




   // Only have this burger animate if we are on desktop
   const cursorTag = document.querySelector('div.click')
   const tapScreenTag = document.querySelector('div.tap')

      if ("ontouchstart" in document.documentElement) {
         // if we're on a mobile - we run stuff
         // remove div cursor follow
         cursorTag.style.display = 'none'

         document.addEventListener('touchend', function (event) {
            tapScreenTag.style.display = 'none'
         })

         menuBurgerTag.style.position = 'fixed'
         menuBurgerTag.style.right = 5 + 'px'
         menuBurgerTag.style.top = 35 + 'px'

      } else {
         // if we're on a desktop
         // animates the burger
         animateBurger()

         // removes from desktop
         tapScreenTag.style.display = 'none'

         // here we can make a graphic follow a cursor
         // need a function first
         const moveCursorTag = function (x, y) {
            cursorTag.style.left = x + 'px'
            cursorTag.style.top = y + 'px'
         }
         document.addEventListener('mousemove', function (event) {
            moveCursorTag(event.pageX, event.pageY)
         })
         document.addEventListener('click', function (event) {
            cursorTag.style.display = 'none'
            bodyTag.style.cursor = "auto"
         })

   }




   // here we can animate the title on page load
   // each element is set up to animate with a delay
   const pageTitleAnimate = document.querySelectorAll('div.logo-area h1.main-logo span')

   delay = 0.5

   pageTitleAnimate.forEach(tag => {
      tag.style.animation = `fadeInTitle 1.4s cubic-bezier(.72,0,.01,1) ${delay}s both`
      tag.style.WebkitAnimation = `fadeInTitle 1.4s cubic-bezier(.72,0,.01,1) ${delay}s both`
      delay = delay + 0.15
   })


   // this is where we interact with the div over the logo
   // and change opacity of the logos

   const mainLogoTag = document.querySelector('h1.main-logo')
   const altLogoTag = document.querySelector('h1.logo-alt')

   const logoInteractionTag = document.querySelector('div.logo-interaction--mask')

   logoInteractionTag.addEventListener('mouseover', function () {
      mainLogoTag.style.opacity = '0'
      altLogoTag.style.opacity = '1'
   })

   logoInteractionTag.addEventListener('mouseleave', function () {
      mainLogoTag.style.opacity = '1'
      altLogoTag.style.opacity = '0'
   })
   




   // animated favicon

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