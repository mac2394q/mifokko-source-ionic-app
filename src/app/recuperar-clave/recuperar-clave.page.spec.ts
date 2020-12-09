import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecuperarClavePage } from './recuperar-clave.page';

describe('RecuperarClavePage', () => {
  let component: RecuperarClavePage;
  let fixture: ComponentFixture<RecuperarClavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarClavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperarClavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
