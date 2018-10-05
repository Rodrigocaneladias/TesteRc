import { Component, OnInit, Input } from '@angular/core';
import { Produto } from './produto.model';
@Component({
  selector: 'rc-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit {

  @Input() produtos: Produto[];
  
  constructor() { }

  ngOnInit() {
  }

}
