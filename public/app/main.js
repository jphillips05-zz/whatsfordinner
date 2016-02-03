System.register(["angular2/platform/browser", "angular2/core", "angular2/http", "angular2/router"], function($__export) {
  "use strict";
  var bootstrap,
      Component,
      provide,
      Inject,
      OnInit,
      Http,
      HTTP_PROVIDERS,
      AsyncRoute,
      RouteConfig,
      Router,
      ROUTER_DIRECTIVES,
      ROUTER_PROVIDERS,
      LocationStrategy,
      HashLocationStrategy,
      App;
  return {
    setters: [function($__m) {
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      Component = $__m.Component;
      provide = $__m.provide;
      Inject = $__m.Inject;
      OnInit = $__m.OnInit;
    }, function($__m) {
      Http = $__m.Http;
      HTTP_PROVIDERS = $__m.HTTP_PROVIDERS;
    }, function($__m) {
      AsyncRoute = $__m.AsyncRoute;
      RouteConfig = $__m.RouteConfig;
      Router = $__m.Router;
      ROUTER_DIRECTIVES = $__m.ROUTER_DIRECTIVES;
      ROUTER_PROVIDERS = $__m.ROUTER_PROVIDERS;
      LocationStrategy = $__m.LocationStrategy;
      HashLocationStrategy = $__m.HashLocationStrategy;
    }],
    execute: function() {
      App = function() {
        function App() {}
        return ($traceurRuntime.createClass)(App, {}, {});
      }();
      $__export("App", App);
      Object.defineProperty(App, "annotations", {get: function() {
          return [new Component({
            selector: 'app',
            templateUrl: './app/main.html',
            directives: [ROUTER_DIRECTIVES]
          })];
        }});
      bootstrap(App, [ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
    }
  };
});
