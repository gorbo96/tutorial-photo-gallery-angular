import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ContactosService } from '../../services/contactos.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Contacto } from '../../domain/contacto';
import { ContactosrestService } from '../../services/contactosrest.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  constructor(private router: Router,
              private contactoService: ContactosService,
              private contactoServiceRest: ContactosrestService,
              public afs: AngularFirestore,
              private callNumber: CallNumber) { }

  contactos: any;
  contactosRest: any;

  public appPages = [
    { nombre: 'Finn', txt1: "I'm a big deal", txt2:"I've had a pretty messed up day...", avatar:"./avatar-finn.png"},
    { nombre: 'Han', txt1: "Look, kid...", txt2:"I've got enough on my plate as it is, and I...", avatar:"./avatar-finn.png"},
    { nombre: 'Rey', txt1: "I can handle myself", txt2:"You will remove these restraints and leave...", avatar:"./avatar-finn.png"},
    { nombre: 'Luke', txt1: "Your thoughts betray you", txt2:"I feel the good in you, the conflict...", avatar:"./avatar-finn.png"},
  ];
  
  ngOnInit(){
    this.contactos =  this.contactoService.getContactos();
    this.contactosRest =  this.contactoServiceRest.getContactos();
  }

  editar(contacto:any){
    let params: NavigationExtras={
      queryParams:{
        contacto:contacto
      }
    }
    this.router.navigate(["/editar"], params);
  }

  crear(){
    this.router.navigate(["/crear"]);
  }

  crearRest(){
    this.router.navigate(["/crearrs"]);
  }
  
  llamar(contacto:any){
    this.callNumber.callNumber(""+contacto.telefono+"", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
  
}
