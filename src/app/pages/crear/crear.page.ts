import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contacto } from '../../domain/contacto';
import { ContactosService } from '../../services/contactos.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  contacto: Contacto = new Contacto();
  
  contador=0; 
  
  constructor(private router: Router,
              private contactoService: ContactosService) { }

  ngOnInit() {
   
  }

  regresar(){
    this.router.navigate(["/listado"]);
  }

  guardar(){
    console.log(this.contacto)
    this.contactoService.save(this.contacto)
  }

  update(cnt:any){
    console.log(cnt);
    this.contador=cnt;
  }

  imgData: any;
  
  imageSelectedEvt(data: any) {
    // console.log(data);
    this.imgData = data;
  }
  uploadFinishedEvt(data: any) {
    this.contacto.avatar = data;
  }

}
