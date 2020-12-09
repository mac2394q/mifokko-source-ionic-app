import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { IngresoSalida } from 'src/app/models/IngresoSalida';
import { IngresoSalidaUI } from 'src/app/models/IngresoSalidaUI';
import { ActivatedRoute , Router } from '@angular/router';



@Component({
  selector: 'app-datos-vehiculo',
  templateUrl: './datos-vehiculo.page.html',
  styleUrls: ['./datos-vehiculo.page.scss'],
})
export class DatosVehiculoPage implements OnInit {

 

  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    
  }

}
