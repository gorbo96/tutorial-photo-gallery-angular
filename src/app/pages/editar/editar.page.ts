import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from '../../domain/contacto';
import { ContactosService } from '../../services/contactos.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  nombre: string
  txt1: string
  txt2: string
  avatar: string
  
  contacto: Contacto = new Contacto();
  
  constructor(private route: ActivatedRoute, private router: Router,
              private contactoService: ContactosService) { 
    route.queryParams.subscribe(params=>{
      console.log(params)
      this.contacto = params.contacto;
      if(this.router.getCurrentNavigation().extras.queryParams){
        this.contacto = this.router.getCurrentNavigation().extras.queryParams.contacto
      }
    })
  }

  ngOnInit() {
  }

  guardar(){
    console.log(this.contacto);
    this.contactoService.save(this.contacto)
  }

  regresar(){
    this.router.navigate(["/listado"]);
  }


}
