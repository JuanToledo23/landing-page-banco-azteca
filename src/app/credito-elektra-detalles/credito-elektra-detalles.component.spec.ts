import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoElektraDetallesComponent } from './credito-elektra-detalles.component';

describe('CreditoElektraDetallesComponent', () => {
  let component: CreditoElektraDetallesComponent;
  let fixture: ComponentFixture<CreditoElektraDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditoElektraDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditoElektraDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
