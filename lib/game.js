(function () {
  if (typeof Asteroids === 'undefined'){
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function (DIM_X, DIM_Y) {
    this.DIM_X = DIM_X;
    this.DIM_Y = DIM_Y;
    this.asteroids = [];

    this.addAsteroids();

  };


  Game.NUM_ASTEROIDS = 10;

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      var randPos = this.randomPosition();
      this.asteroids.push(new Asteroids.Asteroid({pos: randPos}));
    }
  };

  Game.prototype.randomPosition = function (){
    var x = Math.random()*this.DIM_X;
    var y = Math.random()*this.DIM_Y;
    return [x,y];
  };

  Game.prototype.draw = function (ctx){
    ctx.clearRect(0,0, this.DIM_X, this.DIM_Y);
    this.asteroids.forEach(function(ast){
      ast.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function (){
    this.asteroids.forEach(function(ast){
      ast.move();
    });
  };

})();
