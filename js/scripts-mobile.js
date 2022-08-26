function buttons() {
    document.getElementById('hamburgerbtn').style.display = 'block';
    document.getElementById('closebtn').style.display = 'none';
}

function showNavBar() {
    let menuButton = document.querySelector('.header button');
    menuButton.addEventListener('click',()=>activeNavbar());
};

function activeNavbar() {

    let hamburgerbtn = document.getElementById('hamburgerbtn');
    let closebtn = document.getElementById('closebtn');
    let navBar = document.querySelector('.header .nav-bar');

    if(hamburgerbtn.style.display == 'block') {
        hamburgerbtn.style.display = 'none';
        closebtn.style.display = 'block';
        navBar.style.transform = 'translate(-7%, 57%)';
    }else{
        hamburgerbtn.style.display = 'block';
        closebtn.style.display = 'none';
        navBar.style.transform = 'translate(100%, 57%)';
    }
}

buttons(); 
showNavBar();