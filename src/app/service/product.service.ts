import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config'

@Injectable()
export class ProductsService {
    constructor(
        private http: HttpClient
    ) {

    }

    getProducts(): Observable<any> {
        return this.http.get(API_URLS.PRODUCTS_URL)
    }
}