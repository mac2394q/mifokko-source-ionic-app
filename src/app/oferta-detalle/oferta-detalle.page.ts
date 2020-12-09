import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oferta-detalle',
  templateUrl: './oferta-detalle.page.html',
  styleUrls: ['./oferta-detalle.page.scss'],
})
export class OfertaDetallePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  enviarMensajeWp(){
    window.open('https://api.whatsapp.com/send?' + 'phone=573172339048    ' + '&' + 'text=Mensaje de prueba api whatsapp' + '&' + 'source=' + '&' + 'data=', 'Diseño Web');
    
  }

}
