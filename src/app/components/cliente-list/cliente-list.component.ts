import { Component, OnInit } from '@angular/core';
import { ClientesService } from "../../services/clientes.service";
import { cliente } from 'src/app/models/cliente';
import { first } from 'rxjs';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes: any = [];

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this.clientesService.getClientes().subscribe(
      res => {
        this.clientes = res;
      },
      err => console.error(err)
    );
  }


 deleteCliente(ID_Cliente: string) {
    this.clientesService.deletCliente(ID_Cliente).subscribe(
      res => {
        console.log(res);
        this.getClientes();
      },
      err => console.log(err)
    );
  }

}


