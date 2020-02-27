import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../service/product.service';
import { Product } from '../shared/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products = []

  operation = 'add'
  selectedProduct: Product

  productForm: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {
    this.createForm()
   }

  ngOnInit() {
    this.initProduct()
    this.products = this.route.snapshot.data.products
  }

  createForm() {
    this.productForm = this.formBuilder.group({
      ref: ['', Validators.required],
      quantity: '',
      price: ''
    })
  }

  loadProduct() {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    }, err => {
      console.log('Error : ', err)
    })
  }

  addProduct() {
    const product = this.productForm.value
    this.productService.addProduct(product).subscribe(res => {
      this.loadProduct()
      this.initProduct()
    })
  }

  updateProduct() {
    this.productService.updateProduct(this.selectedProduct)
      .subscribe(res => {
        this.initProduct()
        this.loadProduct()
      })
  }
  
  deleteProduct() {
    this.productService.deleteProduct(this.selectedProduct.id)
      .subscribe(res => {
        this.selectedProduct = new Product()
        this.loadProduct()
      })
  }

  initProduct() {
    this.selectedProduct = new Product()
    this.createForm()
  }
}
