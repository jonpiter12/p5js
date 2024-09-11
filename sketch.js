function setup() {
    createCanvas(600, 600);
    background([220]);
  }
  
  function draw() {
   
  
    stroke("blue");
    fill("red");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  