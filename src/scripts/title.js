

// //html setup
// const title = document.getElementsByClassName('parallax-title')
// const titleArray = Array.from(title)
  
// // input setup
// const input = {
//   mouseX: {
//     start: 0,
//     end: window.innerWidth,
//     current: 0,
//   },
//   mouseY: {
//     start: 0,
//     end: window.innerHeight,
//     current: 0,
//   }
// }
// input.mouseX.range = input.mouseX.end - input.mouseX.start
// input.mouseY.range = input.mouseY.end - input.mouseY.start


// // output setup
// const output = {
//   x: {
//     start: -50,
//     end: 50,
//     current: 0,
//   },
//   y: {
//     start: -50,
//     end: 50,
//     current: 0,
//   },
// }
// output.x.range = output.x.end - output.x.start
// output.y.range = output.y.end - output.y.start

// const mouse = {
//   x: window.innerWidth / 2,
//   y: window.innerHeight / 2
// }

// const updateInputs = function () {
//   // mouse x input
//   input.mouseX.current = mouse.x
//   input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range
//   // mouse y input
//   input.mouseY.current = mouse.y
//   input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range
// }

// const updateOutputs = function () {
//   // output x and y
//   output.x.current = output.x.start + (input.mouseX.fraction * output.x.range)
//   output.y.current = output.y.start + (input.mouseY.fraction * output.y.range)
// }

// const updateParallaxItem = function () {
//   // apply to html
//     // title.style.transform = `translate(${output.x.current}px, ${output.y.current}px)`
//     titleArray.forEach(title => {
//         title.style.transform = `translate(${output.x.current}px, ${output.y.current}px)`
//       })  
// }

// const handleMouseMove = function (event) {
//   mouse.x = event.clientX
//   mouse.y = event.clientY
  
//   updateInputs()
//   updateOutputs()
//   updateParallaxItem() 
// }

// const handleWindowResize = function (event) {
//   input.mouseX.end = window.innerWidth
//   input.mouseX.range = input.mouseX.end - input.mouseX.start
  
//   input.mouseY.end = window.innerHeight
//   input.mouseY.range = input.mouseY.end - input.mouseY.start
// }



// window.addEventListener('mousemove', handleMouseMove)
// window.addEventListener('resize', handleWindowResize)

// updateInputs()
// updateOutputs()
// updateParallaxItem()



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