let cor;
let circuloX; 
let circuloY; 

function setup() {
  createCanvas(500, 400); 
  background(color(247,47,55));
  cor = color(random(0,255), random(0,255), random(0,255));
  circuloX = [0,0,0];
  circuloY = [random(height), random(height), random(height)];
}

function draw() {
  fill(cor);
  for (let contador in circuloX) {
  circle(circuloX[contador],circuloY[contador],100);
  circuloX [contador] += random(0,30); 
  circuloY [contador] += random(-25,25);

if(circuloX[contador]  >= width) {
  circuloX [contador] = 0;
  circuloY[contador] = random(height);
}
  }
  if(mouseIsPressed) {
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  }
}
  
  
  