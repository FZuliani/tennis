import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateCourtComponent } from './form-create-court.component';

describe('FormCreateCourtComponent', () => {
  let component: FormCreateCourtComponent;
  let fixture: ComponentFixture<FormCreateCourtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCreateCourtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreateCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
