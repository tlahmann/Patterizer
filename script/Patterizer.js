var elements;

function setup() {
    var canvas = createCanvas(1024, 720);
    canvas.parent('content');
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

function draw() {
    init();
    
    background(colorBackground);

    var i;
    for (i = 0; i < elements.length; i++) {
        elements[i].display();
    }
}

function screenshot() {
    saveFrames("Patterizer-" + timestamp(), "png", 0.1, 10);
}

function timestamp() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var millis = today.getMilliseconds();
    
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    
    return dd+'/'+mm+'/'+yyyy+'-'+millis;
}

function reset() {
    radius = 50;
    rotation = 0;
    originX = 0;
    originY = 0;
    distanceX = 100;
    distanceY = 100;
    offset = false;
    thickness = 1;
    numberOfElements = 4;
    outline = false;
    
    document.getElementById('radius').value = 50;
    document.getElementById('rotation').value = 0;
    document.getElementById('originX').value = 0;
    document.getElementById('originY').value = 0;
    document.getElementById('distanceX').value = 100;
    document.getElementById('distanceY').value = 100;
    document.getElementById('offsetOnOff').checked = false;
    document.getElementById('thickness').value = 1;
    document.getElementById('elements').value = 4;
    document.getElementById('outlineOnOff').checked = false;
    
    document.getElementById('radiusR').value = 50;
    document.getElementById('rotationR').value = 0;
    document.getElementById('originXR').value = 0;
    document.getElementById('originYR').value = 0;
    document.getElementById('distanceXR').value = 100;
    document.getElementById('distanceYR').value = 100;
    document.getElementById('thicknessR').value = 1;
    document.getElementById('elementsR').value = 4;
    
    draw();
    
    /* loadJSON(function(response) {
        // Parse JSON string into object
        var file = JSON.parse(response);
        
        var reset = file.getJSONObject(0);

        originX = reset.getJSONObject("origin").getFloat("x");
        originY = reset.getJSONObject("origin").getFloat("y");
        
        radius = reset.getFloat("radius");
        rotation = reset.getFloat("rotation");
        distanceX = reset.getJSONObject("distance").getFloat("x");
        distanceY = reset.getJSONObject("distance").getFloat("y");
        thickness = reset.getFloat("thickness");
        numberOfElements = reset.getFloat("elements");
        
        offset = reset.getInt("offset") == 1;
        outline = reset.getInt("outline") == 1;
    }); */
}

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'my_data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
