import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrera2Component } from './carrera2.component';

describe('Carrera2Component', () => {
  let component: Carrera2Component;
  let fixture: ComponentFixture<Carrera2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carrera2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carrera2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
