import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactoRest } from 'src/app/domain/contactorest';
import { ContactosrestService } from 'src/app/services/contactosrest.service';

@Component({
  selector: 'app-crearrs',
  templateUrl: './crearrs.page.html',
  styleUrls: ['./crearrs.page.scss'],
})
export class CrearrsPage implements OnInit {

  contacto: ContactoRest = new ContactoRest();
  
  contador=0; 
  
  constructor(private router: Router,
              private contactoService: ContactosrestService) { }

  ngOnInit() {
   
  }

  regresar(){
    this.router.navigate(["/listado"]);
  }

  guardar(){
    console.log(this.contacto)
    this.contactoService.save(this.contacto).subscribe()
  }

  update(cnt:any){
    console.log(cnt);
    this.contador=cnt;
  }

}
