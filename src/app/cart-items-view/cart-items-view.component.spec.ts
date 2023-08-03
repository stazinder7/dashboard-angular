import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemsViewComponent } from './cart-items-view.component';

describe('CartItemsViewComponent', () => {
  let component: CartItemsViewComponent;
  let fixture: ComponentFixture<CartItemsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItemsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
