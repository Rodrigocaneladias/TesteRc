import { Produto } from './../lista-produtos/produto.model';
import { Component, OnInit } from '@angular/core';

import { GlobalEvents } from './../../common/globalEvents.service';
import { OrcamentoService } from './orcamento.service';

@Component({
  selector: 'rc-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})

export class CarrinhoComponent implements OnInit {

  constructor(private globalEvents: GlobalEvents, private orcamentoService: OrcamentoService) { }
  produtos: Produto[]= []
  ngOnInit() {
    this.globalEvents.addItem.subscribe((prod)=> {
      this.orcamentoService.addProd(prod);
      this.produtos = this.orcamentoService.produtos;
    })
  }

  limpar(){
    this.orcamentoService.clear();
    this.produtos = this.orcamentoService.produtos;
  }
    
}