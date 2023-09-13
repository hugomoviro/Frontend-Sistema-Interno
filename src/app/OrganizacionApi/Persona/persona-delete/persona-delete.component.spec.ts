import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaDeleteComponent } from './persona-delete.component';

describe('PersonaDeleteComponent', () => {
  let component: PersonaDeleteComponent;
  let fixture: ComponentFixture<PersonaDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaDeleteComponent]
    });
    fixture = TestBed.createComponent(PersonaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
