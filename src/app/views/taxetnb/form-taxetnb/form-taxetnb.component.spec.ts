import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTaxetnbComponent } from './form-taxetnb.component';

describe('FormTaxetnbComponent', () => {
  let component: FormTaxetnbComponent;
  let fixture: ComponentFixture<FormTaxetnbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTaxetnbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTaxetnbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
