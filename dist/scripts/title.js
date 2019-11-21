

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