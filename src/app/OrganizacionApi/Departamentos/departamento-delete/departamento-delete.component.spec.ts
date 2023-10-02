import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoDeleteComponent } from './departamento-delete.component';

describe('DepartamentoDeleteComponent', () => {
  let component: DepartamentoDeleteComponent;
  let fixture: ComponentFixture<DepartamentoDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartamentoDeleteComponent]
    });
    fixture = TestBed.createComponent(DepartamentoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
