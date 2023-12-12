import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NgIf, NgFor, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LoL Account Shop'
  products!: Product[];

  ngOnInit() {
    this.products = [
      new Product(
      "EUW Master Account",
    "Server EUW, Rank Master, All Champs, 150+ SKins, 10K BE ",
    "../../assets/Master.jpg",
    250,
    0,
    false
    )];
  }
}
