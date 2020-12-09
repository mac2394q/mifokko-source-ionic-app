import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatosVehiculoPage } from './datos-vehiculo.page';

describe('DatosVehiculoPage', () => {
  let component: DatosVehiculoPage;
  let fixture: ComponentFixture<DatosVehiculoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosVehiculoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatosVehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
