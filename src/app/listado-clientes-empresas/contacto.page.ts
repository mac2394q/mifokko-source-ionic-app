import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  enviarMensajeWp(){
    window.open('https://api.whatsapp.com/send?' + 'phone=573172339048    ' + '&' + 'text=Mensaje de prueba api whatsapp' + '&' + 'source=' + '&' + 'data=', 'Diseño Web');
    
  }

}
