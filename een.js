
// main game loop

requestAnimationFrame( animate );

function animate() {

    requestAnimationFrame(animate);
    renderer.render(stage);
}
