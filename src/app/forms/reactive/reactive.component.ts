import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  formReactive: FormGroup;

  constructor( private formBuilder: FormBuilder ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  // Métodos de validación de los controles
  get nombreNoValido(){
    return this.formReactive.get('nombre').invalid && this.formReactive.get('nombre').touched;
  }

  get codigoNoValido(){
    return this.formReactive.get('codigo').invalid && this.formReactive.get('codigo').touched;
  }

  get categoriaNoValida(){
    return this.formReactive.get('categoria').invalid && this.formReactive.get('categoria').touched;
  }

  get descuentoNoValido(){
    return this.formReactive.get('descuento').invalid && this.formReactive.get('descuento').touched;
  }

  get precioCompraNoValido(){
    return this.formReactive.get('precio.compra').invalid && this.formReactive.get('precio.compra').touched;
  }

  get precioVentaNoValido(){
    return this.formReactive.get('precio.venta').invalid && this.formReactive.get('precio.venta').touched;
  }

  // Inicialización de los campos (controles) del formulario
  crearFormulario(){
    this.formReactive = this.formBuilder.group({
      nombre: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z]+$')]],
      codigo: ['', [
        Validators.required,
        Validators.minLength(5)]],
      categoria: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[a-zA-Z]+$')]],
      descuento: ['', Validators.required],
      precio: this.formBuilder.group({
        compra: ['',[
          Validators.required,
          Validators.minLength(2)]],
        venta: ['', [
          Validators.required,
          Validators.minLength(2)]]
      })
    });
  }

  guardar(){
    console.log(this.formReactive);

    if(this.formReactive.invalid){
      return Object.values( this.formReactive.controls ).forEach( control => {

        if(control instanceof FormGroup){
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }

      });
    }
    // Resetear formulario
    this.formReactive.reset();
  }
}
