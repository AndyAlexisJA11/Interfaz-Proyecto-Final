import { Component, OnInit, HostBinding } from '@angular/core';
import { cliente } from 'src/app/models/cliente';
import { ClientesService } from "../../services/clientes.service";
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {


  cliente: cliente = {
    ID_Cliente: 0,
    Nombre: '',
    Apellido: '',
    Direccion: '',
    Telefono: 0
  };

  edit : boolean = false;

  constructor(private clientesService: ClientesService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params['ID_Cliente']) {
      this.clientesService.getCliente(params['ID_Cliente'])
      .subscribe(
        res => {
        console.log(res);
        this.cliente = res;
        this.edit = true;
        },
        err => console.error(err)
      )
    }
   }

  saveNewCliente() {
    const clienteWithoutId = { ...this.cliente };
    delete clienteWithoutId.ID_Cliente;

    this.clientesService.saveCliente(clienteWithoutId).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/clientes']);
      },
      err => {
        console.error(err);
      }
    );
  }


 updateCliente() {
    this.clientesService.updateCliente(this.cliente.ID_Cliente, this.cliente)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }







}
