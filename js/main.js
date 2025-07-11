document.querySelector('.left-navbar-hide').addEventListener('click', function(e){
    e.stopPropagation();
    const leftNavbar = document.getElementById('left-navbar');
    leftNavbar.classList.toggle('hidden');
    
    if (leftNavbar.classList.contains('hidden')) {
        leftNavbar.style.cursor = 'pointer';
        this.style.transform = 'rotate(180deg)';
    } else {
        leftNavbar.style.cursor = 'default';
        this.style.transform = 'rotate(0deg)';
    }
});

document.querySelector('#left-navbar').addEventListener('click', function(){
    if(document.getElementById('left-navbar').classList.contains('hidden')){
        document.querySelector('.left-navbar-hide').click();
    }
});

document.querySelector('.search-button').addEventListener('click', function() {
    const searchInput = document.querySelector('.search-input');
    searchInput.classList.toggle('active');
    
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    }
});