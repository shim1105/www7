import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertdeptComponent } from './insertdept.component';

describe('InsertdeptComponent', () => {
  let component: InsertdeptComponent;
  let fixture: ComponentFixture<InsertdeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertdeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertdeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
