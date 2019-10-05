import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallotParentComponent } from './ballot-parent.component';

describe('BallotParentComponent', () => {
  let component: BallotParentComponent;
  let fixture: ComponentFixture<BallotParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallotParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallotParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
