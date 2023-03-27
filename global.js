const NAV = document.getElementById('nav')
let navShown = false;

function toggleNav()
{
    navShown = !navShown
    if (navShown)
    {
        NAV.classList.remove('hidden')
        return;
    }
    NAV.classList.add('hidden')
}