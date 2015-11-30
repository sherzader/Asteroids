(function () {
  if (typeof Asteroids === 'undefined'){
    Window.Asteroids = {};
  }

  var Game = Asteroids.Game = function () {

    this.asteroids = [];

    this.addAsteroids();

  };

  Game.DIM_X = DIM_X;
  Game.DIM_Y = DIM_Y;
  Game.NUM_ASTEROIDS = 10;

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < GAME.NUM_ASTEROIDS; i++) {
      var randPos = this.randomPosition();
      this.asteroids.push(new Asteroids.Asteroid({pos: randPos}));
    }
  };

  Game.prototype.randomPosition = function (){
    var x = Math.random()*Game.DIM_X;
    var y = Math.random()*Game.DIM_Y;
    return [x,y];
  };

  Game.prototype.draw = function (ctx){
    ctx.clearRect();
    this.asteroids.forEach(function(ast){
      ast.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function (){
    this.asteroids.forEach(function(ast){
      ast.move();
    };
  };

})();
