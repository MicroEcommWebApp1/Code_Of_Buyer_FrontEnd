import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetail2Component } from './product-detail2.component';

describe('ProductDetail2Component', () => {
  let component: ProductDetail2Component;
  let fixture: ComponentFixture<ProductDetail2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetail2Component]
    });
    fixture = TestBed.createComponent(ProductDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
