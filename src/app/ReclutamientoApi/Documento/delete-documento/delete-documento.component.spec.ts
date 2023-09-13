import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDocumentoComponent } from './delete-documento.component';

describe('DeleteDocumentoComponent', () => {
  let component: DeleteDocumentoComponent;
  let fixture: ComponentFixture<DeleteDocumentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteDocumentoComponent]
    });
    fixture = TestBed.createComponent(DeleteDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
