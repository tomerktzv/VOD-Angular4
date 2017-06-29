import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterbynameComponent } from './filterbyname.component';

describe('FilterbynameComponent', () => {
  let component: FilterbynameComponent;
  let fixture: ComponentFixture<FilterbynameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterbynameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
