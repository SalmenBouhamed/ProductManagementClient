import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products = []

  productForm: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService
  ) {
    this.productForm = this.formBuilder.group({
      ref: ['', Validators.required],
      quantity: '',
      price: ''
    })
   }

  ngOnInit() {
    this.loadProduct()
  }

  loadProduct() {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    }, err => {
      console.log('Error : ', err)
    })
  }

}
