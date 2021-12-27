import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Cliente } from '../../Modelo/Cliente';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  miFormulario!: FormGroup;
  cliente:Cliente=new Cliente();

  constructor(private router:Router,private service:ServiceService) { 
    this.miFormulario = new FormGroup({
      'id': new FormControl(),
      'reason': new FormControl(),
      'contact': new FormControl(),
      'region': new FormControl(),
      'type': new FormControl()
    });
  }

  ngOnInit(): void {
    this.Editar();
  }

Editar(){
  let  id=localStorage.getItem("id");
  this.service.getClientId(""+id)
  .subscribe(data=>{
    this.cliente=data;
    this.miFormulario=new FormGroup({
      'id': new FormControl(this.cliente.id),
      'reason': new FormControl(this.cliente.reason),
      'contact': new FormControl(this.cliente.contact),
      'region': new FormControl(this.cliente.region),
      'type': new FormControl(this.cliente.type)
  })
})
}

Actualizar(){
  this.cliente= this.miFormulario.value;
  this.service.updateClient(this.cliente)

  .subscribe(data=>{
    alert("Se agrego con Exito....!!!");
    this.router.navigate(["listar"]);
  })
}

}
