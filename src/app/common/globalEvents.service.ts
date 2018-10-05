import { EventEmitter, Output } from "@angular/core";
import { Produto } from '../catalogo/lista-produtos/produto.model'

export class GlobalEvents{
    @Output() addItem = new EventEmitter<Produto>();

    constructor(){};

    emitAdd(produto: Produto){
        return this.addItem.emit(produto);
    }
}