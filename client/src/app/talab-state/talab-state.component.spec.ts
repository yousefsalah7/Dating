import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalabStateComponent } from './talab-state.component';

describe('TalabStateComponent', () => {
  let component: TalabStateComponent;
  let fixture: ComponentFixture<TalabStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalabStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalabStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
