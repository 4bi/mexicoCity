// hover over circle background changes color

var bgcolor = 'blue'

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bgcolor);
  fill('red');
  noStroke();
  ellipse(width/2, height/2, 100, 100);
  var d = dist(width/2, height/2, mouseX, mouseY);
  if (d < 50) {
    bgcolor = 'red';{
      fill('blue');
      // text("mexico city", 50, 200);
      text("y aquí mi cabello huele a tacos, gritos, luces, queso, miradas y mezcal", 50, 200);
      text("y siento delirio, delirio, delirio ", 50, 220);
      text("aquí en el lugar donde la arquitectura es poesía y nos jugamos los dioses y hacemos ciudad", 50, 240);
      text("oh caos, cómo te necesitaba", 50, 280);
    }
  } else {
    bgcolor = 'blue';
    }
}