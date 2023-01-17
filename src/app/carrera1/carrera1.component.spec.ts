import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrera1Component } from './carrera1.component';

describe('Carrera1Component', () => {
  let component: Carrera1Component;
  let fixture: ComponentFixture<Carrera1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carrera1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carrera1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
