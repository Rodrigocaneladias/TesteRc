import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'rc-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit()
  }
}
