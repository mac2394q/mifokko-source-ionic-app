import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CambiarClavePage } from './cambiar-clave.page';

describe('CambiarClavePage', () => {
  let component: CambiarClavePage;
  let fixture: ComponentFixture<CambiarClavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarClavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CambiarClavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
