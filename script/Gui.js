var radius = 50;
var rotation = 0;
var originX = 0;
var originY = 0;
var distanceX = 100;
var distanceY = 100;
var offset = false;

var thickness = 1;
var numberOfElements = 4;

var outline = false;

function changeOffset(val) {
    offset = val;
    draw();
}

function changeOutline(val) {
    outline = val;
    draw();
}

function changeRadius(val) {
    radius = parseInt(val);
    document.getElementById('radius').value = val;
    draw();
}

function changeRotation(val) {
    rotation = parseInt(val);
    document.getElementById('rotation').value = val;
    draw();
}

function changeOriginX(val) {
    originX = parseInt(val);
    document.getElementById('originX').value = val;
    draw();
}

function changeOriginY(val) {
    originY = parseInt(val);
    document.getElementById('originY').value = val;
    draw();
}

function changeDistanceX(val) {
    distanceX = parseInt(val);
    document.getElementById('distanceX').value = val;
    draw();
}

function changeDistanceY(val) {
    distanceY = parseInt(val);
    document.getElementById('distanceY').value = val;
    draw();
}

function changeThickness(val) {
    thickness = parseInt(val);
    document.getElementById('thickness').value = val;
    draw();
}

function changeNumberOfElements(val) {
    numberOfElements = parseInt(val);
    document.getElementById('elements').value = val;
    draw();
}
