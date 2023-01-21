const colors=['red','green','blue','yellow','aqua','orange']

function changecolor(){
    // Now here creating a Variable which will Convert those color name which are written in "colors" variable into integer.
    const colorindex=parseInt(Math.random()*colors.length)

    // now here I am targeting the body because I want to change color of Back-ground
    document.body.style.background=colors[colorindex]
}