(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(obj){
    obj["color"] = "000000";
    obj["radius"] = 25;
    obj["vel"] = Asteroids.Utils.randomVec(5);
    MovingObject.call(this, obj);
  };



  Asteroids.Util.inherits(Asteroid, MovingObject);

})();
