import { Component, OnInit } from '@angular/core';
import { Clientes } from "../../models/clientes";
import { ClientesService } from "../../services/clientes.service";
//import { FormBuilder, FormGroup, Validators } from "@angular/forms";
//import { ModalDialogService } from "../../services/modal-dialog.service";


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

  constructor(
    private ClienteService:  ClientesService
  ) { }

  ngOnInit() {
    this.GetClientes();
  }

  GetClientes() {
    this.ClienteService.get()
    .subscribe((res:Clientes[]) => {
      this.Items = res;
    });
  }

}