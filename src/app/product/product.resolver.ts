import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { ProductsService } from '../service/product.service';


@Injectable()
export class ProductResolver implements Resolve<any> {

    constructor(
        private productService: ProductsService
    ) {

    }

    resolve() {
        return this.productService.getProducts();
    }
}