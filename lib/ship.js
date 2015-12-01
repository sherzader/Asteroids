(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }
  var Ship = Asteroids.Ship = function (obj){
    obj["radius"]= 5;
    obj["color"] = "#FF0000";
    obj["vel"] = [0, 0];
    Asteroids.MovingObject.call(this, obj);
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);
})();
