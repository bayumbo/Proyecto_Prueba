import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrera3Component } from './carrera3.component';

describe('Carrera3Component', () => {
  let component: Carrera3Component;
  let fixture: ComponentFixture<Carrera3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carrera3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carrera3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
