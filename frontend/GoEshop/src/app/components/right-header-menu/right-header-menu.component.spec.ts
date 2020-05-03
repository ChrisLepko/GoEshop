import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightHeaderMenuComponent } from './right-header-menu.component';

describe('RightHeaderMenuComponent', () => {
  let component: RightHeaderMenuComponent;
  let fixture: ComponentFixture<RightHeaderMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightHeaderMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
