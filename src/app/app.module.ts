import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"iotproject-bbf99","appId":"1:1068130122656:web:182ed0bd4eb168d77b02c5","storageBucket":"iotproject-bbf99.appspot.com","apiKey":"AIzaSyDBnbJL4g08Ms4rE7HvRO8cvgk5bD3Sbko","authDomain":"iotproject-bbf99.firebaseapp.com","messagingSenderId":"1068130122656"})), provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
