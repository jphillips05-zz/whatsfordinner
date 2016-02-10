System.register(["angular2/core"], function($__export) {
  "use strict";
  var Component,
      Inject,
      OnInit,
      Home;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Inject = $__m.Inject;
      OnInit = $__m.OnInit;
    }],
    execute: function() {
      Home = function() {
        function Home() {}
        return ($traceurRuntime.createClass)(Home, {ngOnInit: function() {}}, {});
      }();
      $__export("Home", Home);
      Object.defineProperty(Home, "annotations", {get: function() {
          return [new Component({
            selector: 'home',
            templateUrl: './app/home/index.html'
          })];
        }});
    }
  };
});
