import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhedmaComponent } from './khedma.component';

describe('KhedmaComponent', () => {
  let component: KhedmaComponent;
  let fixture: ComponentFixture<KhedmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhedmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhedmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
