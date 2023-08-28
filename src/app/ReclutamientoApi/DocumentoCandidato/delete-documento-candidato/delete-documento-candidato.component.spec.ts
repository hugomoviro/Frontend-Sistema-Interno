import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDocumentoCandidatoComponent } from './delete-documento-candidato.component';

describe('DeleteDocumentoCandidatoComponent', () => {
  let component: DeleteDocumentoCandidatoComponent;
  let fixture: ComponentFixture<DeleteDocumentoCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteDocumentoCandidatoComponent]
    });
    fixture = TestBed.createComponent(DeleteDocumentoCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
