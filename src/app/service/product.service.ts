import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config'
import { Product } from '../shared/product'

@Injectable()
export class ProductsService {
    constructor(
        private http: HttpClient
    ) {

    }

    getProducts(): Observable<any> {
        return this.http.get(API_URLS.PRODUCTS_URL)
    }

    addProduct(product: Product): Observable<any> {
        return this.http.post(API_URLS.PRODUCTS_URL, product)
    }

    updateProduct(product: Product): Observable<any> {
        console.log(product)
        return this.http.put(API_URLS.PRODUCTS_URL, product)
    }

    deleteProduct(id: number): Observable<any> {
        return this.http.delete(`${API_URLS.PRODUCTS_URL}/${id}`)
    }
}