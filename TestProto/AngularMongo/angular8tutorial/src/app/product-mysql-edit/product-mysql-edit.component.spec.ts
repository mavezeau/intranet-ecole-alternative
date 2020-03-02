import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMysqlEditComponent } from './product-mysql-edit.component';

describe('ProductMysqlEditComponent', () => {
  let component: ProductMysqlEditComponent;
  let fixture: ComponentFixture<ProductMysqlEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMysqlEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMysqlEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
