import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComComponent } from './new-com.component';

describe('NewComComponent', () => {
  let component: NewComComponent;
  let fixture: ComponentFixture<NewComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('testing component title',()=>
  expect(component.componentName).toBe('user')
  )
});
