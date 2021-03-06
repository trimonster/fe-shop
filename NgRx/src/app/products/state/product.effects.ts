import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import * as productActions from './product.action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Product } from '../product';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {

    constructor(private actions$: Actions,
                private productService: ProductService
        ) { }

    @Effect()
    loadProducts$ = this.actions$.pipe(
        ofType(productActions.ProductActionTypes.Load),
        mergeMap((action: productActions.LoadProduct) =>
            this.productService.getProducts().pipe(
                map((products: Product[]) => (new productActions.LoadSuccess(products))),
                catchError(err => of(new productActions.LoadFail(err)))
            ))
    );

    @Effect()
    updateProduct$ = this.actions$.pipe(
        ofType(productActions.ProductActionTypes.UpdateProduct),
        map((action: productActions.UpdateProduct) => action.payload),
        mergeMap((product: Product) =>
            this.productService.updateProduct(product).pipe(
                map(updatedProduct => new productActions.UpdateSuccess(updatedProduct)),
                catchError(err => of(new productActions.UpdateProductFail(err)))
            ))
    )
}
