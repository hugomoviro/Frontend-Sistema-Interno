import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoUpdateComponent } from './departamento-update.component';

describe('DepartamentoUpdateComponent', () => {
  let component: DepartamentoUpdateComponent;
  let fixture: ComponentFixture<DepartamentoUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartamentoUpdateComponent]
    });
    fixture = TestBed.createComponent(DepartamentoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
