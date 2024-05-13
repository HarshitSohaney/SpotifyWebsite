let navbar = document.querySelector('#search'); 
const oldNavbarTop = navbar.offsetTop;

mainContent.onscroll = function() {
    // add the class navbar-fixed and topbar-display to navbar when we reach #search on scroll
    if (mainContent.scrollTop >= navbar.offsetTop) {
        navbar.classList.add('navbar-fixed');
        navbar.classList.add('topbar-display');

        // show the child elements of the search bar
        let searchChild = navbar.children;
        for (let i = 0; i < searchChild.length; i++) {
            searchChild[i].style.display = 'block';
        }
    }
    if (mainContent.scrollTop < oldNavbarTop) {
        navbar.classList.remove('navbar-fixed');
        navbar.classList.remove('topbar-display');
        
        // hide the child elements of the search bar
        let searchChild = navbar.children;
        for (let i = 0; i < searchChild.length; i++) {
            searchChild[i].style.display = 'none';
        }
    }
}