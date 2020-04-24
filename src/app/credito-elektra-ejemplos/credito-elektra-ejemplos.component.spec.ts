import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoElektraEjemplosComponent } from './credito-elektra-ejemplos.component';

describe('CreditoElektraEjemplosComponent', () => {
  let component: CreditoElektraEjemplosComponent;
  let fixture: ComponentFixture<CreditoElektraEjemplosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditoElektraEjemplosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditoElektraEjemplosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
