import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfertaDetallePage } from './oferta-detalle.page';

describe('OfertaDetallePage', () => {
  let component: OfertaDetallePage;
  let fixture: ComponentFixture<OfertaDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfertaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
