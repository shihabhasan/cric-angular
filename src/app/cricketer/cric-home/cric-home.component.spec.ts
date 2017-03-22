import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricHomeComponent } from './cric-home.component';

describe('CricHomeComponent', () => {
  let component: CricHomeComponent;
  let fixture: ComponentFixture<CricHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
