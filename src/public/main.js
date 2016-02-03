import {bootstrap} from 'angular2/platform/browser';
import {Component, provide, Inject, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {AsyncRoute, RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

@Component({
    selector: 'app',
    templateUrl: './app/main.html',
    directives: [ROUTER_DIRECTIVES]
})

export class App {}

bootstrap(App, [
    ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	provide(LocationStrategy, { useClass: HashLocationStrategy })
]);