import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl:"./product-card.component.html",
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() myProduct!: Product;

  onLike() {
    if(this.myProduct.isLiked) {
      this.myProduct.likes--;
    } else {
      this.myProduct.likes++;
    }
    this.myProduct.isLiked = !this.myProduct.isLiked;
  }

}

