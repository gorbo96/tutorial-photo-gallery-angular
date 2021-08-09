import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contacto } from '../domain/contacto';
import { ContactoRest } from '../domain/contactorest';

@Injectable({
  providedIn: 'root'
})
export class ContactosrestService {

  constructor(private http:HttpClient) { }
  
  save(contacto:ContactoRest): Observable<any>{
      console.log(contacto);
      let url=environment.WS_PATH + "/contactos";
      console.log(url);
      return this.http.post<any>(url, contacto);
  }
  
  getContactos():Observable<any[]>{
      return this.http.get<any>(environment.WS_PATH + "/contactos");
  }

}
