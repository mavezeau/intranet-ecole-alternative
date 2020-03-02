import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMysqlAddComponent } from './product-mysql-add.component';

describe('ProductMysqlAddComponent', () => {
  let component: ProductMysqlAddComponent;
  let fixture: ComponentFixture<ProductMysqlAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMysqlAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMysqlAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
