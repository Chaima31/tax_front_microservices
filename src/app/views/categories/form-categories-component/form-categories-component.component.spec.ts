import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCategoriesComponentComponent } from './form-categories-component.component';

describe('FormCategoriesComponentComponent', () => {
  let component: FormCategoriesComponentComponent;
  let fixture: ComponentFixture<FormCategoriesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCategoriesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCategoriesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
