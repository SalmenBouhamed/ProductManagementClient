import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    //private productService: ProductService
  ) {
    this.productForm = this.formBuilder.group({
      ref: ['', Validators.required],
      quantity: '',
      price: ''
    })
   }

  ngOnInit() {
  }

}
