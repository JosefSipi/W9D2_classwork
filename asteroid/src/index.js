// require("./asteroid.js");
// require("./bullet.js");
// require("./game_view.js");
// require("./game.js");
// require("./ship.js");
// require("./utils.js");
// const Game = require("./game.js");


const Proto = require("./moving_object.js");

window.MovingObject = Proto.MovingObject;


document.addEventListener("DOMContentLoaded", function() {
    
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 1000;
    canvasEl.height = 1000;
    
    const ctx = canvasEl.getContext("2d");
    
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1000, 1000);
    console.log("webpack");

    n = new Proto.MovingObject();
    n.draw(ctx);

});


