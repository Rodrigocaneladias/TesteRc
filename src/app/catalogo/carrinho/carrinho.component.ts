import { GlobalEvents } from './../../common/globalEvents.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rc-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})

export class CarrinhoComponent implements OnInit {

  constructor(private globalEvents: GlobalEvents) { }

  ngOnInit() {
    this.globalEvents.addItem.subscribe((prod)=> console.log("-------->", prod));
  }
    
}