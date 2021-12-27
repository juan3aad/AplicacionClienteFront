import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../Modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http:HttpClient) { }

    Url='http://localhost:8090/stefanini/api/clients';

    getClientes(){
      return this.http.get<Cliente[]>(this.Url+"/all");
    }
    createClient(cliente:Cliente){
      console.log("JUANK"+cliente.id);
      return this.http.post<Cliente>(this.Url+"/save",cliente);
    }

    deleteClient(cliente:Cliente){
      return this.http.delete<Cliente>(this.Url+"/delete/"+cliente.id);
    }

    getClientId(id:String){
      return this.http.get<Cliente>(this.Url+"/"+id)
    }

    updateClient(cliente:Cliente){
      return this.http.put<Cliente>(this.Url+"/update/"+cliente.id,cliente);
    }
  
}
