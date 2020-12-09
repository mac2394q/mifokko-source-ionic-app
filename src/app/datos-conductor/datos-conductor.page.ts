import { Component, OnInit } from '@angular/core';
import { IngresoSalida } from 'src/app/models/IngresoSalida';
import { IngresoSalidaUI } from 'src/app/models/IngresoSalidaUI';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-datos-conductor',
  templateUrl: './datos-conductor.page.html',
  styleUrls: ['./datos-conductor.page.scss'],
})
export class DatosConductorPage implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

   
  }

}
