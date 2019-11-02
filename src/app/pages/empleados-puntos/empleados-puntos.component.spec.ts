import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosPuntosComponent } from './empleados-puntos.component';

describe('EmpleadosPuntosComponent', () => {
  let component: EmpleadosPuntosComponent;
  let fixture: ComponentFixture<EmpleadosPuntosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadosPuntosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosPuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
