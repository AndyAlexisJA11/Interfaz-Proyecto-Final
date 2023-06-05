import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { cliente } from "../models/cliente";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get( `${this.API_URI}/Clientes`);
  }

  getCliente(ID_Cliente: string) {
    return this.http.get(`${this.API_URI}/Clientes/${ID_Cliente}`);
  }

  deletCliente(ID_Cliente: string) {
    return this.http.delete(`${this.API_URI}/Clientes/${ID_Cliente}`);
  }

  saveCliente(cliente: cliente) {
    return this.http.post(`${this.API_URI}/Clientes`, cliente);
  }

  updateCliente(ID_Cliente: number | undefined, updateCliente: cliente): Observable<cliente> {
    return this.http.put(`${this.API_URI}/Clientes/${ID_Cliente}`, updateCliente);
  }
}
