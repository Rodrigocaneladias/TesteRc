import { Component, OnInit, Input} from '@angular/core';
import { GlobalEvents } from '../../../common/globalEvents.service'
import { Produto } from '../produto.model';

@Component({
  selector: 'rc-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})

export class ProdutoComponent implements OnInit {

  @Input() produto: Produto;

  constructor(private events: GlobalEvents) { }

  ngOnInit() {
  }

  emitAddEvent(produto: Produto){
    this.events.emitAdd(produto)
  }
}
