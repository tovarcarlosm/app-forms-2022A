import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  producto = {
    nombre: '',
    codigo: '',
    categoria: '',
    precio: '',
    descuento: 'no'
  }

  constructor() { }

  ngOnInit(): void {
  }

  public guardar( formTemplate: NgForm ){
    console.log(formTemplate);
    if(formTemplate.invalid){
      Object.values( formTemplate.controls ).forEach( control => {
        control.markAsTouched();
      })
      return;
    }

    // desde punto inicio el llamado a la api para guardar el producto
  }
}
