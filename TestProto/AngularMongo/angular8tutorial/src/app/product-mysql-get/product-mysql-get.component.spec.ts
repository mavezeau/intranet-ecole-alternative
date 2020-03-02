import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMysqlGetComponent } from './product-mysql-get.component';

describe('ProductMysqlGetComponent', () => {
  let component: ProductMysqlGetComponent;
  let fixture: ComponentFixture<ProductMysqlGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMysqlGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMysqlGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
