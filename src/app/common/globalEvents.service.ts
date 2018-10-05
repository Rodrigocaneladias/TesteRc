import { EventEmitter, Output } from "@angular/core";

export class GlobalEvents{
    @Output() addItem = new EventEmitter();

    constructor(){};

    emitAdd(){
        return this.addItem.emit();
    }
}