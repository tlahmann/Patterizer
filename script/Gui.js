var radius = 50;
var radiusChange = 0;
var rotation = 0;
var originX = 0;
var originY = 0;
var distanceX = 100;
var distanceY = 100;
var offset = false;

var thickness = 1;
var numberOfElements = 4;

var outline = false;

function changeRadius(ev) {
    radius = parseInt(ev.value);
    draw();
}

function changeRadiusChange(ev) {
    radiusChange = parseInt(ev.value);
    draw();
}

function changeRotation(ev) {
    rotation = parseInt(ev.value);
    draw();
}

function changeOriginX(ev) {
    originX = parseInt(ev.value);
    draw();
}

function changeOriginY(ev) {
    originY = parseInt(ev.value);
    draw();
}

function changeDistanceX(ev) {
    distanceX = parseInt(ev.value);
    draw();
}

function changeDistanceY(ev) {
    distanceY = parseInt(ev.value);
    draw();
}

function changeThickness(ev) {
    thickness = parseInt(ev.value);
    draw();
}

function changeNumberOfElements(ev) {
    numberOfElements = parseInt(ev.value);
    draw();
}
