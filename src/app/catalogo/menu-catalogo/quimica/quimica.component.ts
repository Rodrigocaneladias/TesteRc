import { Component, OnInit } from '@angular/core';
import { Produto } from './../../lista-produtos/produto.model';

@Component({
  selector: 'rc-quimica',
  templateUrl: './quimica.component.html',
  styleUrls: ['./quimica.component.scss']
})
export class QuimicaComponent implements OnInit {

  produtos: Produto[] = [
    {
      nome: 'teste alimenticia',
      descricao: 'descricao alimenticia',
      imagePath: 'https://a2.vnda.com.br/370x370/invictaonline/2018/02/15/101528081808-pote-de-vidro-liso-2-5l-vermelho-velvet-1117.jpg',
      quantidade: 0
    },
    {
      nome: 'teste alimenticia 2',
      descricao: 'descricao alimenticia 2 ',
      imagePath: 'https://a3.vnda.com.br/370x370/invictaonline/2018/02/25/101528470121-pote-de-vidro-quadrado-2l-prata-1215.jpg',
      quantidade: 0
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
