import { Component, OnInit } from '@angular/core';


import swal from 'sweetalert';

@Component({
  selector: 'app-unirse',
  templateUrl: './unirse.page.html',
  styleUrls: ['./unirse.page.scss'],
})
export class UnirsePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  mediosPago(){
    
    //swal('Gracias por su pago oportuno.', 'Su nuevo saldo es $ 21.000', 'success');
  }

}
