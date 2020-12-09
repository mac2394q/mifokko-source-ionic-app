import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicioProfesionalDetallePage } from './servicio-profesional-detalle.page';

describe('ServicioProfesionalDetallePage', () => {
  let component: ServicioProfesionalDetallePage;
  let fixture: ComponentFixture<ServicioProfesionalDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioProfesionalDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicioProfesionalDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
