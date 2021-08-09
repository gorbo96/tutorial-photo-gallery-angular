import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { GooglePlus } from '@ionic-native/google-plus/ngx';

import { AgmCoreModule } from '@agm/core';

import { HttpClientModule } from "@angular/common/http";
import { TakePhotoComponent } from './components/take-photo/take-photo.component';
import { Camera } from '@ionic-native/camera/ngx';



@NgModule({
  declarations: [AppComponent,TakePhotoComponent],
  entryComponents: [],
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule,
            AngularFireModule.initializeApp(environment.firebaseConfig),
            AngularFirestoreModule,
            HttpClientModule,
            AgmCoreModule.forRoot({
              apiKey: ''
            })
          ],
  providers: [CallNumber, GooglePlus, Camera,{ provide: ErrorHandler, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
