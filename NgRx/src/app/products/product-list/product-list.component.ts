import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription, Observable } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { Store, StoreModule, select } from '@ngrx/store';
import * as fromProduct from '../state/product.reducer';
import * as fromProductActions from '../state/product.action';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[];
  componentActive = true;

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  sub: Subscription;
  products$: Observable<Product[]>;
  errorMessage$: Observable<string>;

  constructor(
    private store: Store<fromProduct.State>,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    // this.sub = this.productService.selectedProductChanges$.subscribe(
    //   selectedProduct => this.selectedProduct = selectedProduct
    // );
    this.store
    .pipe(select(fromProduct.getSelectedProduct))
    .subscribe((product: Product) => {
      this.selectedProduct = product;
    });

    // this.productService.getProducts().subscribe({
    //   next: (products: Product[]) => this.products = products,
    //   error: (err: any) => this.errorMessage = err.error
    // });

    this.errorMessage$ = this.store.pipe(select(fromProduct.getError));
    this.store.dispatch(new fromProductActions.LoadProduct());
    this.products$ = this.store.pipe(select(fromProduct.getProducts));
      // takeWhile(() => this.componentActive)
    // .subscribe((products: Product[]) => this.products = products);

    // TODO: UNSUBSCRIBE
    this.store
    .pipe(select(fromProduct.getShowProductCode))
    .subscribe(productCode => {
      this.displayCode = productCode;
    });
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
    this.componentActive = false;
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new fromProductActions.ToggleProductCode(value));
  }

  newProduct(): void {
    // this.productService.changeSelectedProduct(this.productService.newProduct());
    this.store.dispatch(new fromProductActions.InitializeCurrentProduct());
  }

  productSelected(product: Product): void {
    // this.productService.changeSelectedProduct(product);
    this.store.dispatch(new fromProductActions.SetCurrentProduct(product));
  }

}
