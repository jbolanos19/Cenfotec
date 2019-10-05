import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterParentComponent } from './parameter-parent.component';

describe('ParameterParentComponent', () => {
  let component: ParameterParentComponent;
  let fixture: ComponentFixture<ParameterParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
