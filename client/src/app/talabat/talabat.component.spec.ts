import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalabatComponent } from './talabat.component';

describe('TalabatComponent', () => {
  let component: TalabatComponent;
  let fixture: ComponentFixture<TalabatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalabatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalabatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
