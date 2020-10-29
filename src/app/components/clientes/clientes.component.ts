import { Component, OnInit } from '@angular/core';
import { Clientes } from '../../models/clientes';
import { ClientesService } from "../../services/clientes.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalDialogService } from "../../services/modal-dialog.service";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  Titulo = "Clientes";
  Items: Clientes[] = [];
  TituloAccionABMC = {
    A: "(Agregar)",
    L: "(Listado)"
  };
  AccionABMC = "L";

  //FormReg: FormGroup;
  submitted = false;


  constructor(
    public formBuilder: FormBuilder,
    private ClienteService:  ClientesService,
    private modalDialogService: ModalDialogService
  ) { }

  ngOnInit() {

    //this.FormReg = this.formBuilder.group({
      //IdArticulo: [0],
      //Descripcion: [ "", [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      //Importe: [null, [Validators.required, Validators.pattern("[0-9]{1,7}[-.][0-9]{2}")]],
      //CantidadHoras: [null, [Validators.required, Validators.pattern("[0-9]{1,7}")]],
    //});

    this.GetClientes();

  }

  GetClientes() {
    this.ClienteService.get()
    .subscribe((res:Clientes[]) => {
      this.Items = res;
    });
  }

  Agregar() {
    this.AccionABMC = "A";
    //this.FormReg.reset();
    this.submitted = false;
    
    //this.FormReg.markAsUntouched();
  }

  Volver() {
    this.AccionABMC = "L";
  }

}