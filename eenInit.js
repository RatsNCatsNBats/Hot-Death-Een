
// global flag for modal behavior support
// probably a better way to do this but hey, it's javascript

var isModal = false;

// variable to hold the currently moving Card object for use by update()

var moving = [];

// Create the renderer

var renderer = PIXI.autoDetectRenderer(800, 600);

// set the BG color

renderer.backgroundColor = 0x007f00;

// fill the window with the renderer view

renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
renderer.view.style.top = "0px";
renderer.view.style.left = "0px";
renderer.autoResize = true;
renderer.resize(window.innerWidth, window.innerHeight);

// make sure when the window gets resized, the renderer is as well

window.addEventListener("resize", function(event) {
    renderer.resize(window.innerWidth, window.innerHeight);
}, false);

// Add the canvas to the HTML document

document.body.appendChild(renderer.view);

// create the root of the scene graph

var stage = new PIXI.Container();
