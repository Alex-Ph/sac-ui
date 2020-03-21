import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpentaskListComponent } from './opentask-list.component';

describe('OpentaskListComponent', () => {
  let component: OpentaskListComponent;
  let fixture: ComponentFixture<OpentaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpentaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpentaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
