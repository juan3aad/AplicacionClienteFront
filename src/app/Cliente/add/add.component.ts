import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Cliente } from '../../Modelo/Cliente';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
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

    this.miFormulario = new FormGroup({
      'id': new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3),
        Validators.pattern(/^[\w\s*]+[^0-9]+$/)
      ]),
      'reason': new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[\w\s*]+[^0-9]+$/)
      ]),
      'region': new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[\w\s*]+[^0-9]+$/)
      ]),
      'contact': new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern('[0-9]+[A-Z]?')
      ]),

      'type': new FormControl('', [                
        Validators.pattern(/^[\w\s*]+[^0-9]+$/)
      ])
      
      
    });



  }

  ngOnInit(){
  }

  
  Guardar(){
    this.cliente= this.miFormulario.value;
    this.service.createClient(this.cliente)

    .subscribe(data=>{
      alert("Se agrego con Exito....!!!");
      this.router.navigate(["listar"]);
    })
  }

  

}
