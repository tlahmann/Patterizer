var elements;

function setup() {
    createCanvas(1024, 720);
    noLoop();
}

function init() {
    elements = [];
    var evodd = true;
    var l = 0, i = 0, j = 0;
    for (j = originY; j < height + 100; j += distanceY, l++) {
        var k = (evodd = !evodd) && offset ? distanceX / 2 : 0;
        for (i = originX; i < width + 100; i += distanceX) {
            var pos = [i + k, j];
            elements.push(new PShape(this, 
                                       pos,
                                       radius,
                                       rotation, 
                                       numberOfElements));
        }
    }
}

function settings() {
    createCanvas(width, height);
}

function draw() {
    init();
    
    background(color(0, 0, 0, 255));

    var i;
    for (i = 0; i < elements.length; i++) {
        elements[i].display();
    }
}

function screenshot() {
    saveFrame("Patterizer-" + timestamp() + ".png");
    gui.screenshot = false;
}

function timestamp() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    
    return dd+'/'+mm+'/'+yyyy;
}
