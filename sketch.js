const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var gSlider, ground;
var boxes=[], box1, count, gVal;

function setup() {
    createCanvas(400, 400);

    // Create an instance of engine, world
    engine = Engine.create();
    world = engine.world;
 
    // This slider will dictate the gravity of the world.
    gSlider = createSlider(0, 100, 50);
    gSlider.position(125, 375);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes.
    ground = new Ground(200, 365, 400, 17.5);
}


function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
        box1 = new Box(mouseX, mouseY, gVal);
        boxes.push(box1);
        count = boxes.length;
        return boxes, count;
    }
} 

function draw() {
    background(40, 190, 250);
    Engine.update(engine);

    // gravity value    
    gval = gSlider.value();
    
    // Draw all the elements
    ground.display();
    
    for (var boxNo = 0; boxNo < count; boxNo ++){
        boxes[boxNo].display();
    }
}