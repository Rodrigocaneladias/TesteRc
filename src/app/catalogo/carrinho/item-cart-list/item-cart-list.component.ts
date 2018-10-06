import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../lista-produtos/produto.model';

@Component({
  selector: 'rc-item-cart-list',
  templateUrl: './item-cart-list.component.html',
  styleUrls: ['./item-cart-list.component.scss']
})
export class ItemCartListComponent implements OnInit {

  @Input() produto: Produto;

  constructor() { }

  ngOnInit() {
  }

}
