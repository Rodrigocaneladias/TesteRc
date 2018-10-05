import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { GlobalEvents } from '../../../common/globalEvents.service'
@Component({
  selector: 'rc-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  constructor(private events: GlobalEvents) { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.events.emitAdd()
  }
}
