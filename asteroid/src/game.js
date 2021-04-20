// Holds collections of the asteroids, bullets, and your ship.
//     Game.prototype.step method calls Game.prototype.move on all the objects, 
//     and Game.prototype.checkCollisions checks for colliding objects.
//     Game.prototype.draw(ctx) draws the game.
// Keeps track of dimensions of the space; wraps objects around when they drift off the screen.

function Game () {
    this.DIM_X = this.randomPosition;
    this.DIM_Y = this.randomPosition;
    this.NUM_ASTEROIDS = "";
    this.addAsteroids();
}

Game.prototype.randomPosition = function (){
    return Math.floor(Math.random()*1000);

};

// module.exports = 