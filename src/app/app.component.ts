import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Acerca De:', url: '/acerca', icon: 'information-circle' },
    { title: 'Listado:', url: '/listado', icon: 'information-circle'},
    { title: 'Mapa:', url: '/mapa', icon: 'information-circle' },
    { title: 'Login:', url: '/login', icon: 'information-circle'},
  ];
  public labels = ['Otros'];
  public nombre = "Martin Bojorque";
  constructor(public alertController: AlertController) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'Clase nueva',
      header: 'Alerta',
      subHeader: 'Subtitulo',
      message: 'Alerta',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
