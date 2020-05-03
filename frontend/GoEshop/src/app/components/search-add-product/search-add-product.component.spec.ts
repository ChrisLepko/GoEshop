import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAddProductComponent } from './search-add-product.component';

describe('SearchAddProductComponent', () => {
  let component: SearchAddProductComponent;
  let fixture: ComponentFixture<SearchAddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAddProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
