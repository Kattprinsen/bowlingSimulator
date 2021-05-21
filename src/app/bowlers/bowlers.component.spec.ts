import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlersComponent } from './bowlers.component';

describe('BowlersComponent', () => {
  let component: BowlersComponent;
  let fixture: ComponentFixture<BowlersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BowlersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
