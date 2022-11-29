import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceManComponent } from './police-man.component';

describe('PoliceManComponent', () => {
  let component: PoliceManComponent;
  let fixture: ComponentFixture<PoliceManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliceManComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliceManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
