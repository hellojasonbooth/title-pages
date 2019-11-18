

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
    
  







