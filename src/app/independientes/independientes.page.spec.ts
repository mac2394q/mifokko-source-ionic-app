import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndependientesPage } from './independientes.page';

describe('IndependientesPage', () => {
  let component: IndependientesPage;
  let fixture: ComponentFixture<IndependientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndependientesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndependientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
