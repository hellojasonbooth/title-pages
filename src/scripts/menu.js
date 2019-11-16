

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

  	function animate() {
    	let distX = mouseX - burgerX
    	let distY = mouseY - burgerY

    	burgerX = burgerX + (distX * speed)
    	burgerY = burgerY + (distY * speed)

        menuBurgerTag.style.left = (burgerX - areaTag.offsetLeft) + 'px'
        menuBurgerTag.style.top = burgerY + 'px'

    	requestAnimationFrame(animate)
    }

    window.addEventListener('resize', handleResize, animate)
    
    // temporary - but what we want to do
    // is only have this animate if we are on desktop
    //animate()

    if ("ontouchstart" in document.documentElement) {
      // document.write("your device is a touch screen device.");
    } else {
     // document.write("your device is NOT a touch device");
     animate()
    }




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


