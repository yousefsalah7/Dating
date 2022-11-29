import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOrRegisterComponent } from './sign-or-register.component';

describe('SignOrRegisterComponent', () => {
  let component: SignOrRegisterComponent;
  let fixture: ComponentFixture<SignOrRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignOrRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignOrRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
