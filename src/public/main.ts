///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import {Component, provide, Inject, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {AsyncRoute, RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {Home} from './home/index';
import {Pantry} from './pantry/index';

@Component({
    selector: 'app',
    templateUrl: './app/main.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', component: Home, as: 'Home' },
    { path: '/Pantry', component: Pantry, as: 'Pantry'}
])

export class App {}

bootstrap(App, [
    ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	provide(LocationStrategy, { useClass: HashLocationStrategy })
]);