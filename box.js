class Box {
    constructor(x, y, g) {
        var options = {
            'friction': 1.0,
            'gravity': g
        };
        var rand = random(15, 45);
        this.body = Bodies.rectangle(x, y, rand, rand, options);
        this.width = rand;
        this.height = rand;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        
        rectMode(CENTER);
        noStroke();
        stroke("black");
        fill(200, 20, 20);
        rect(pos.x, pos.y, this.width, this.height);
    }
}