import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDocumentoCandidatoComponent } from './create-documento-candidato.component';

describe('CreateDocumentoCandidatoComponent', () => {
  let component: CreateDocumentoCandidatoComponent;
  let fixture: ComponentFixture<CreateDocumentoCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDocumentoCandidatoComponent]
    });
    fixture = TestBed.createComponent(CreateDocumentoCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
