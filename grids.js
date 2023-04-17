const mobileQuery = window.matchMedia('(max-aspect-ratio: 1/1)')
let isMobile = false;
let threeGrids = document.getElementsByClassName('grid-90-3')
//threeGrids += document.querySelectorAll('grid-100-3')

for (let i = 0; i < threeGrids.length; ++i)
{
    let gridTemplate = '';
    
    for (let j = 0; j < 3; ++j)
    {
        if(threeGrids[i].children[j].classList == undefined || !threeGrids[i].children[j].classList.contains('mobile-hidden'))
        {
            gridTemplate += '1fr ';
        }
        else gridTemplate += '0 ';
    }
    
    threeGrids[i].dataset.gridTemplate = gridTemplate;
}

mobileQuery.addListener(mediaChange)
mediaChange(mobileQuery)

function mediaChange(e) {
    console.log("RAN")
    if (e.matches && !isMobile) {
        
        for (let i = 0; i < threeGrids.length; ++i)
        {
            threeGrids[i].style.gridTemplateRows = threeGrids[i].dataset.gridTemplate;
        }
        isMobile = true
    }
    else if (isMobile) {
        for (let i = 0; i < threeGrids.length; ++i)
        {
            threeGrids[i].style.gridTemplateRows = '1fr'
        }
        isMobile = false
    }
}