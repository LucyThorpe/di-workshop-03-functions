function setup() {
  createCanvas(1200, 600)
  background(255)
}

function draw() {
  fill(255, 130, 0)
  stroke(0)
  house(mouseX, mouseY,100,100)
  house(mouseX+100, mouseY,100,100)
  house(mouseX-100, mouseY,100,100)
   //triangle(0, 30, 40, 0, 80, 30)
   // square(5, 30, 70)
}

function house(x,y,w,h) {
  roof(x,y,w,h)
  fill(150,20,20)
  square(x,y,w,h)
  fill(255,130,0)
}

function square(x, y, w, h) {
  rect(x, y, w, h)
}
  // x,y means the position of the shape, size means the size of the shape

  function roof( x, y){
    triangle( x, y, x+100, y, x+50, y-50)
  } 

 