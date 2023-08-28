import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDocumentoCandidatoComponent } from './listar-documento-candidato.component';

describe('ListarDocumentoCandidatoComponent', () => {
  let component: ListarDocumentoCandidatoComponent;
  let fixture: ComponentFixture<ListarDocumentoCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarDocumentoCandidatoComponent]
    });
    fixture = TestBed.createComponent(ListarDocumentoCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
