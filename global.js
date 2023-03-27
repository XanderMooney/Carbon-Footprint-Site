const NAV = document.getElementById('nav')
let navShown = false;


function toggleNav()
{
    if (navShown)
    {
        NAV.classList.add('hidden')
        navShown = false
        return;
    }
    navShown = true
    NAV.classList.remove('hidden')
}