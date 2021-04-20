function MovingObject() {
    this.pos = [30, 30];
    this.vel = [10, 10];
    this.radius = 5;
    this.color = "#00FF00";
}

MovingObject.prototype.draw = function (ctx) {

    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.strokeStyle = "green";
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


module.exports = {MovingObject}