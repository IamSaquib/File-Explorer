import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDirComponent } from './list-dir.component';

describe('ListDirComponent', () => {
  let component: ListDirComponent;
  let fixture: ComponentFixture<ListDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
