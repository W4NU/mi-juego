var fantasma
var auto1,auto2,auto3,auto4
var fondo
function preload(){

//fantasma = loadImage("personaje para juego.jpg")
 auto1 = loadImage("assets/auto4.jpg")
//auto2 = loadImage("assets/auto3.jpg")
// auto3 = loadImage("assets/auto 1.jpg")
// auto4 = loadImage("assets/images.png")
 fondo = loadImage("assets/fondo de juego.png")
}
function setup(){
createCanvas(windowWidth,windowHeight)

}
function draw(){
 background(fondo)
 personaje = createSprite(200,200)

}
