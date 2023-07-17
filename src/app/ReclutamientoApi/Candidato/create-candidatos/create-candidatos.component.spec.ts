import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCandidatosComponent } from './create-candidatos.component';

describe('CreateCandidatosComponent', () => {
  let component: CreateCandidatosComponent;
  let fixture: ComponentFixture<CreateCandidatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCandidatosComponent]
    });
    fixture = TestBed.createComponent(CreateCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
