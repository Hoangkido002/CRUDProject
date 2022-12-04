import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  product: Product = {
    title: '',
    description: '',
    number: 0,
    price: 0,
    status: false
  }
  submitted = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  saveProduct(): void {
    const data = {
      title: this.product.title,
      description: this.product.description,
      number: this.product.number,
      price: this.product.price
    };
    this.productService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }
  newProduct(): void {
    this.submitted = false;
    this.product = {
      title: '',
      description: '',
      number: 0,
      price: 0,
      status: false
    };
  }
}
