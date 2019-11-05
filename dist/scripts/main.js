// lets put some code here


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
   img.style.transform = "rotate(" + randomNum + "deg) translateX(" + (-50) + "%) translateY(" + (-50) + "%)"
   stickerTag.appendChild(img)

   // remove half the window width
   img.style.left = x + "px"
   img.style.top = y + "px"

   number = number + 1

   if (number > stickers.length - 1) {
      number = 0
   }


}

stickerTag.addEventListener("click", function (event){
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

   // this is where we can add the blur to elements
   // when menu is open and remove the blur when
   // menu is closed

   const blurredImageTag = document.querySelectorAll('img, h1')

   blurredImageTag.forEach(tag => {

      if (menuTag.classList.contains('open')) {
         tag.classList.add('blurred')
      } else {
         tag.classList.remove('blurred')
      }

     })



})


