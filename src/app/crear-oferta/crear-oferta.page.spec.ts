import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearOfertaPage } from './crear-oferta.page';

describe('CrearOfertaPage', () => {
  let component: CrearOfertaPage;
  let fixture: ComponentFixture<CrearOfertaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearOfertaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearOfertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
