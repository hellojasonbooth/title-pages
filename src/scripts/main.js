const bodyTag = document.querySelector('body')

// stickers
let number = 0

const stickers = [
   "img/bottle_sticker.svg",
   "img/drip_sticker.svg",
   "img/planet_sticker.svg"
]

const stickerTag = document.querySelector("div.stickers")

// const drawAreaTag = document.querySelector("main section.draw-area")

const addSticker = function (x, y) {

   let randomNum = Math.floor(Math.random() * 45 - 45)

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
   addSticker(event.pageX, event.pageY)
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


menuToggleTag.addEventListener('click', function(){
   //
   menuTag.classList.toggle('open')
   burgerTag.classList.toggle('active')
   bodyTag.classList.toggle('hidden')

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
         tapScreenTag.style.display = "block"

         document.addEventListener('touchend', function (event) {
            tapScreenTag.style.display = 'none'
         })


      } else {
         // if we're on a desktop - we run the function
         // animates the burger
         animateBurger()

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
    