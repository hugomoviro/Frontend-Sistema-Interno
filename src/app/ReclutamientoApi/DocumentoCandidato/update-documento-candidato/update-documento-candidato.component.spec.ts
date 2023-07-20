import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDocumentoCandidatoComponent } from './update-documento-candidato.component';

describe('UpdateDocumentoCandidatoComponent', () => {
  let component: UpdateDocumentoCandidatoComponent;
  let fixture: ComponentFixture<UpdateDocumentoCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDocumentoCandidatoComponent]
    });
    fixture = TestBed.createComponent(UpdateDocumentoCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
