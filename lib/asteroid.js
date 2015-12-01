(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(obj){
    obj["color"] = "#000000";
    obj["radius"] = 25;
    obj["vel"] = Asteroids.Util.randomVec(5);
    Asteroids.MovingObject.call(this, obj);
  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);
})();
