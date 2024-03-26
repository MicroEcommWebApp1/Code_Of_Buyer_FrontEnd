import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerdashComponent } from './buyerdash.component';

describe('BuyerdashComponent', () => {
  let component: BuyerdashComponent;
  let fixture: ComponentFixture<BuyerdashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyerdashComponent]
    });
    fixture = TestBed.createComponent(BuyerdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
