const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");

// import "Util";

function Asteroid (options) {
    options = options || {};
    options.pos = options.pos || Util.randomVec(5);
    options.color = "gray";
    options.radius = 20;
    options.vel = Util.randomVec(5);
    MovingObject.call(this, options);
}


Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;