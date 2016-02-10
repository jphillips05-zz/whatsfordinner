System.register(["angular2/core"], function($__export) {
  "use strict";
  var Component,
      Pantry;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
    }],
    execute: function() {
      Pantry = function() {
        function Pantry() {
          this.searchStr = '';
        }
        return ($traceurRuntime.createClass)(Pantry, {
          search: function(str) {
            console.log(str);
          },
          ngOnInit: function() {}
        }, {});
      }();
      $__export("Pantry", Pantry);
      Object.defineProperty(Pantry, "annotations", {get: function() {
          return [new Component({
            selector: 'pantry',
            templateUrl: '/app/pantry/index.html'
          })];
        }});
    }
  };
});
