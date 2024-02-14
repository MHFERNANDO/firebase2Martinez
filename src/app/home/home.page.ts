import { Component } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  rutadetabla: any;
  ledstate: boolean=true;
  ledstate1: boolean=true;
  ledstate2: boolean=true;

  constructor(private db:Firestore) {}
  async apagar() {
    this.rutadetabla = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
    await setDoc(this.rutadetabla, { encender: false });//CAMBIA EL ATRIBUTO DE LA TABLA
    }

    async encender() {
      this.rutadetabla = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
      await setDoc(this.rutadetabla, { encender: true });//CAMBIA EL ATRIBUTO DE LA TABLA
      }

      async toogleState() {
        this.ledstate= !this.ledstate;
        this.rutadetabla = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
        await setDoc(this.rutadetabla, { encender: this.ledstate });//CAMBIA EL ATRIBUTO DE LA TABLA
        }

        async toogleState1() {
          this.ledstate1= !this.ledstate1;
          this.rutadetabla = doc(this.db,'controlLED','LED2');//RUTA DE TABLA EN LA BD
          await setDoc(this.rutadetabla, { encender: this.ledstate1 });//CAMBIA EL ATRIBUTO DE LA TABLA
          }
          async toogleState2() {
            this.ledstate2= !this.ledstate2;
            this.rutadetabla = doc(this.db,'controlLED','LED3');//RUTA DE TABLA EN LA BD
            await setDoc(this.rutadetabla, { encender: this.ledstate2 });//CAMBIA EL ATRIBUTO DE LA TABLA
            }
}
