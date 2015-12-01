(function () {
  if (typeof Asteroids === 'undefined'){
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function (DIM_X, DIM_Y) {
    this.DIM_X = DIM_X;
    this.DIM_Y = DIM_Y;
    this.asteroids = [];

    this.addAsteroids();
    var randPos = this.randomPosition();
    this.ship = new Asteroids.Ship({pos: randPos, game: this});
  };


  Game.NUM_ASTEROIDS = 10;

  Game.prototype.allObjects = function(){
    return this.asteroids.concat([this.ship]);
  };

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      var randPos = this.randomPosition();
      this.asteroids.push(new Asteroids.Asteroid({pos: randPos, game: this}));
    }
  };

  Game.prototype.randomPosition = function (){
    var x = Math.random() * this.DIM_X;
    var y = Math.random() * this.DIM_Y;
    return [x,y];
  };

  Game.prototype.draw = function (ctx){
    ctx.clearRect(0,0, this.DIM_X, this.DIM_Y);
    this.allObjects().forEach(function(obj){
      if (obj["color"] === "#FF0000"){
        
      } else {
        obj.draw(ctx);
      }
    });
  };

  Game.prototype.moveObjects = function (){
    this.allObjects().forEach(function(ast){
      ast.move();
    });
  };

  Game.prototype.wrap = function(pos){
    var wrapX = pos[0];
    var wrapY = pos[1];

    if (wrapX < 0){
      wrapX += this.DIM_X;
    } else {
      wrapX = wrapX % this.DIM_X;
    }
    if (wrapY < 0){
      wrapY += this.DIM_Y;
    } else {
      wrapY = wrapY % this.DIM_Y;
    }

    return [wrapX, wrapY];
  };

  Game.prototype.checkCollisions = function () {
    for (var i = 0; i < this.allObjects().length; i++) {
      for (var j = 0; j < this.allObjects().length; j++) {
        if (i !== j){
          if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])){
            var other = this.allObjects()[j];
            this.remove(this.allObjects()[i]);
            this.remove(other);
          }
        }
      }
    }
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function(obj){
    var index = this.asteroids.indexOf(obj)
    this.asteroids.splice(index, 1);
  };

})();
