import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  valoresPorDefecto = {
    producto: 'Sin nombre',
    precio: 0,
    existencias: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  validaProducto(): boolean {
    return this.miFormulario?.controls.producto?.invalid &&
           this.miFormulario?.controls.producto?.touched;
  }

  validaPrecio(): boolean {
    return this.miFormulario?.controls.precio?.value < 0 &&
           this.miFormulario?.controls.precio?.touched;
  }

  // guardar(miFormulario: NgForm ){
  guardar(){
    // console.log( this.miFormulario );
    this.miFormulario.resetForm();
    // this.miFormulario.resetForm({
    //   precio: 0,
    //   existencias: 0
    // })
  }

}
