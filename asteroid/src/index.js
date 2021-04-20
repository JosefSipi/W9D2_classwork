// require("./bullet.js");
// require("./game_view.js");
// require("./game.js");
// require("./ship.js");
// const Game = require("./game.js");


require("./asteroid.js");
require("./utils.js");
const Asteroid = require("./asteroid.js");
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

    
    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    });

    mo.draw(ctx);
    mo.move(ctx);

    const ast = new Asteroid();
    ast.draw(ctx);
    
    // n.move(ctx);
    
    // a = new Asteroid;
    // a.draw(ctx)
});


