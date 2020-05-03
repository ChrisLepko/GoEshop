import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCategoryMenuComponent } from './side-category-menu.component';

describe('SideCategoryMenuComponent', () => {
  let component: SideCategoryMenuComponent;
  let fixture: ComponentFixture<SideCategoryMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideCategoryMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
