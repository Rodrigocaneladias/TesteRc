import { OrcamentoService } from './../catalogo/carrinho/orcamento.service';
import { Produto } from './../catalogo/lista-produtos/produto.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'rc-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.scss']
})
export class OrcamentoComponent implements OnInit {
  produtos: Produto[];
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;

  orderForm: FormGroup; 
 
  constructor(private formBuilder: FormBuilder, private orcamentoService:OrcamentoService) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.minLength(5), Validators.required]),
      email: this.formBuilder.control('', [Validators.required,  Validators.pattern(this.emailPattern)]),
      telefone: this.formBuilder.control('',[Validators.required, Validators.pattern(this.numberPattern)]),
      observacoes: this.formBuilder.control('')
    })

    this.produtos = this.orcamentoService.produtos;
  }

  putOrcamento(){
    console.log(
      `
      produtos: ${JSON.stringify(this.produtos)},
      cliente:  ${JSON.stringify(this.orderForm.value)}
      `
    );
    
  }
}