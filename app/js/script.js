const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function(){
console.log("click hamburger");

if(header.classList.contains('open')){
    header.classList.remove('open'); ///close hamburger menu
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
    
}
else {
header.classList.add('open'); ///open hamburger menu
overlay.classList.remove('fade-out');
overlay.classList.add('fade-in');
}

});