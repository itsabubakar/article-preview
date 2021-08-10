const icon = document.querySelector('.profile-share');
const bubble =document.querySelector('.bubble-conc')

icon.addEventListener('click', function(){
    bubble.classList.toggle('active')
})