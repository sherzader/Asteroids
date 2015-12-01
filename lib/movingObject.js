(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function (obj) {
    this.game = obj["game"];
    this.pos = obj["pos"];
    this.vel = obj["vel"];
    this.radius = obj["radius"];
    this.color = obj["color"];
  };

  MovingObject.prototype.draw = function(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.fill

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    //Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)
    var x1 = this.pos[0];
    var y1 = this.pos[1];
    var x2 = otherObject.pos[0];
    var y2 = otherObject.pos[1];

    var distance = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    var radii = this.radius + otherObject.radius;
    return (distance < radii);
  };

})();
