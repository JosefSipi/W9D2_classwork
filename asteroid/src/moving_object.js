function MovingObject() {
    this.pos = [30, 30];
    this.vel = [10, 10];
    this.radius = 5;
    this.color = "#00FF00";
}

MovingObject.prototype.draw = function (ctx) {

    ctx.beginPath();
    ctx.arc(30, 30, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
    ctx.stroke()
};


// MovingObject.prototype.move = function () {

// };


// MovingObject.prototype.isCollidedWith = function(otherMovingObject){

// };


module.exports = {MovingObject}