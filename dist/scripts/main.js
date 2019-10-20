// lets put some code here



// menu toggler
const menuToggleTag = document.querySelector('div.burger-menu')
// menu
const menuTag = document.querySelector('div.menu')


menuToggleTag.addEventListener('click', function(){
   //
   menuTag.classList.toggle('open')
   menuToggleTag.classList.toggle('active')

   // this is where we can add the blur to elements
   // when menu is open and remove the blur when
   // menu is closed

})


