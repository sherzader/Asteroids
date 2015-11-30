(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = function (){};

  Asteroids.Util.inherits = function(ChildClass, ParentClass) {
    function Surrogate () {};

    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.construtor = ChildClass;
  };

  Asteroids.Util.randomVec = function(length){
    //work on this
    var dx = (Math.random() * length) - length / 2;
    var dy = (Math.random() * length) - length / 2;
    return [dx, dy];
  };

})();
