import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorConexionComponent } from './error-conexion.component';

describe('ErrorConexionComponent', () => {
  let component: ErrorConexionComponent;
  let fixture: ComponentFixture<ErrorConexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorConexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorConexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
