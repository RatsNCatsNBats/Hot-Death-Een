
requestAnimationFrame( animate );

function animate() {

    requestAnimationFrame(animate);

    // render the stage
    renderer.render(stage);
}
