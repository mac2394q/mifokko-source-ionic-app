import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicioEmpresaDetallePage } from './servicio-empresa-detalle.page';

describe('ServicioEmpresaDetallePage', () => {
  let component: ServicioEmpresaDetallePage;
  let fixture: ComponentFixture<ServicioEmpresaDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioEmpresaDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicioEmpresaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
