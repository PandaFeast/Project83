var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
 
var color = "black"
var width = 3
var radius = 10
var currentX, currentY, lastX, lastY
 
if (screen.width<993) {
    canvas.width=screen.width-70
    canvas.height=screen.height-300
}
canvas.addEventListener("touchstart", touchStartFn)
function touchStartFn(e) {
    lastX = e.touches[0].clientX - canvas.offsetLeft
    lastY = e.touches[0].clientY - canvas.offsetTop
 
    color = document.getElementById("colorTextbox").value
    width = document.getElementById("widthTextbox").value
}
 
canvas.addEventListener("touchmove", touchMoveFn)
function touchMoveFn(e) {
    currentX = e.touches[0].clientX - canvas.offsetLeft
    currentY = e.touches[0].clientY - canvas.offsetTop
 
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = width
    ctx.arc(currentX,currentY,radius,0,2*Math.PI)
    ctx.stroke()

 
    lastX = currentX
    lastY = currentY
}
 
function clearCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
