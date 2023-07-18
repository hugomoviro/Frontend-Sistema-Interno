import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCandidatosComponent } from './delete-candidatos.component';

describe('DeleteCandidatosComponent', () => {
  let component: DeleteCandidatosComponent;
  let fixture: ComponentFixture<DeleteCandidatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCandidatosComponent]
    });
    fixture = TestBed.createComponent(DeleteCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
