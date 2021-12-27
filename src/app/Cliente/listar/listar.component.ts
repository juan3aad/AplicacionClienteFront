import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Cliente } from '../../Modelo/Cliente';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  clientes!: Cliente[];
  constructor(private service:ServiceService,private router:Router) {
    //this.clientes=[];
   }
  
  ngOnInit() {
    this.service.getClientes().subscribe(data=>{this.clientes=data;})
  }

  Delete(cliente:Cliente)
  {
    this.service.deleteClient(cliente)
    .subscribe(data=>{
      this.clientes=this.clientes.filter(c=>c!==cliente);
    })
  }

  Edit(cliente:Cliente):void
  {
    localStorage.setItem("id",cliente.id.toString());
    this.router.navigate(["edit"]);
  }

}
