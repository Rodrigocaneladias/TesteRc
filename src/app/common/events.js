import { EventEmitter } from "@angular/core";

export class Events{
    addItem = new EventEmitter();

    constructor(){};

    addItem(){
        return this.addItem.emit();
    }
}