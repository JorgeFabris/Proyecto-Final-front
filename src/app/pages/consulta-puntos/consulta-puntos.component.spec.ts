import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPuntosComponent } from './consulta-puntos.component';

describe('ConsultaPuntosComponent', () => {
  let component: ConsultaPuntosComponent;
  let fixture: ComponentFixture<ConsultaPuntosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPuntosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
