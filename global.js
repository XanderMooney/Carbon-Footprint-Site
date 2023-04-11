//#region Navbar
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
//#endregion
//#region screen-100
const mainContainers = document.getElementsByClassName('screen-100')
for (let i = 0; i < mainContainers.length; ++i)
{
    mainContainers[i].style.height = '100svh'
}
onResize();

window.addEventListener('resize', function() {onResize();})

function onResize() {
    for (let i = 0; i < mainContainers.length; ++i)
    {
        mainContainers[i].style.height = '100svh' 

        if (isOverflown(mainContainers[i])) {
            mainContainers[i].style.height = ''
        }
    }
}
function isOverflown(element) {
    return element.scrollHeight > element.clientHeight;
  }
//#endregion