import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoRoutingComponent } from './documento-routing.component';

describe('DocumentoRoutingComponent', () => {
  let component: DocumentoRoutingComponent;
  let fixture: ComponentFixture<DocumentoRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentoRoutingComponent]
    });
    fixture = TestBed.createComponent(DocumentoRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
