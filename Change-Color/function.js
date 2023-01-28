const color=['red','aqua','green','magenta','orange','blue','yellow','black']

function colorchange(){
    const colorInt=parseInt(Math.random()*color.length)
    document.body.style.background=color[colorInt]
}
