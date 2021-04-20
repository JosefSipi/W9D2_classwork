function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
}

MovingObject.prototype.draw = function (ctx) {

    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 2;
    ctx.stroke()
};


MovingObject.prototype.move = function (ctx) {
    let posx = this.pos[0];
    let posy = this.pos[1];
    let velx = this.vel[0];
    let vely = this.vel[1];

    this.pos = [posx + velx, posy + vely];
    this.draw(ctx);

};


// MovingObject.prototype.isCollidedWith = function(otherMovingObject){

// };


module.exports = MovingObject;