// require("./bullet.js");
// require("./game_view.js");
// require("./game.js");
// require("./ship.js");
// const Game = require("./game.js");


require("./asteroid.js");
require("./utils.js");
// const Asteroid = require("./asteroid.js");
const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;


document.addEventListener("DOMContentLoaded", function() {
    
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 1000;
    canvasEl.height = 1000;
    
    const ctx = canvasEl.getContext("2d");
    
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1000, 1000);
    console.log("webpack");

    // n = new MovingObject();
    // n.draw(ctx);


    // n.move(ctx);
    
    // a = new Asteroid;
    // a.draw(ctx)
});


