import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdoptarComponent } from './form-adoptar.component';

describe('FormAdoptarComponent', () => {
  let component: FormAdoptarComponent;
  let fixture: ComponentFixture<FormAdoptarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAdoptarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAdoptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
