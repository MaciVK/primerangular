import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulariopersona } from './formulariopersona.component';

describe('FormulariopersonaComponent', () => {
  let component: Formulariopersona;
  let fixture: ComponentFixture<Formulariopersona>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formulariopersona ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formulariopersona);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
