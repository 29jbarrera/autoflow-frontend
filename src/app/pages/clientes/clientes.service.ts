import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment';
import { Cliente, ClientesResponse } from './cliente.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private apiUrl = `${environment.apiUrl}clientes`;

  constructor(private http: HttpClient) {}

  getClientes(): Observable<ClientesResponse> {
    const token = sessionStorage.getItem('authToken'); // Obtener el token almacenado

    if (!token) {
      console.error('❌ Error: No hay token en sessionStorage');
      throw new Error('No hay token disponible');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`, // Incluir el token en la cabecera
    });

    return this.http.get<ClientesResponse>(this.apiUrl, { headers });
  }

  deleteCliente(id: number): Observable<any> {
    const token = sessionStorage.getItem('authToken'); // Obtener el token almacenado

    if (!token) {
      console.error('❌ Error: No hay token en sessionStorage');
      throw new Error('No hay token disponible');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`, // Incluir el token en la cabecera
    });

    return this.http.delete<Cliente>(`${this.apiUrl}/${id}`, { headers });
  }
}
