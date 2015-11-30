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
})();
