var elements;

function setup() {
    createCanvas(1024, 720);
    noLoop();
    init();
}

function init() {
    elements = [];
    var evodd = true;
    var l = 0, i = 0, j = 0;
    for (j = originY.y; j < height + 100; j += distanceY.y, l++) {
        var k = (evodd = !evodd) && offset ? distanceX.y / 2 : 0;
        for (i = originX.y; i < width + 100; i += distanceX.y) {
            var pos = [i + k, j];
            elements.push(new PShape(this, 
                                       pos,
                                       radius.y * ((radiusChange.z - l * radiusChange.y) / radiusChange.z),
                                       rotation.y, 
                                       numberOfElements.y));
        }
    }
}

function settings() {
    createCanvas(width, height);
}

function draw() {
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
