import { Component, OnInit, ContentChild, Input, AfterContentInit } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'rc-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
  
  @Input() label: string;
  @Input() errorMessage: string;

  input: any;

  @ContentChild(FormControlName) control:FormControlName
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.control
    if(this.input === undefined) throw new Error("Esse componente precisa er usado com uma diretiva FormControlName")
  }
  
  hasSuccess(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean{
    return !this.input.valid && (this.input.dirty || this.input.touched)
  }

}
