import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCandidatosComponent } from './listar-candidatos.component';

describe('ListarCandidatosComponent', () => {
  let component: ListarCandidatosComponent;
  let fixture: ComponentFixture<ListarCandidatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCandidatosComponent]
    });
    fixture = TestBed.createComponent(ListarCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
