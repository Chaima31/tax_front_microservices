import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTerrainComponent } from './form-terrain.component';

describe('FormTerrainComponent', () => {
  let component: FormTerrainComponent;
  let fixture: ComponentFixture<FormTerrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTerrainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
