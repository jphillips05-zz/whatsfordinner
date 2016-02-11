import {Component} from 'angular2/core';

@Component({
    selector: 'pantry',
    templateUrl: '/app/pantry/index.html'
})

export class Pantry {
    
    private searchStr: string = '';
    
    constructor() {}
    
    search = (str) => {
        console.log(str);
    }
    
    ngOnInit() {
        //get pantry list
    }
};