import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcrudComponent } from './editcrud.component';

describe('EditcrudComponent', () => {
  let component: EditcrudComponent;
  let fixture: ComponentFixture<EditcrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditcrudComponent]
    });
    fixture = TestBed.createComponent(EditcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
