import { Component } from '@angular/core';
import {categories, Category} from "../category";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
 
  category :  { id: number; name: string; products: {id: number, name: string, price: number, description: string, image: string, address: string, rating: string; like: number}[] } | undefined
  constructor(private route : ActivatedRoute) {
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));

    this.category = categories.find(category => category.id === categoryIdFromRoute);
  }
  removeProduct(ind: number) {
    if (this.category) {
      this.category.products = this.category.products.filter((x) => x.id !== ind);
    }
  }
  share() {
    window.alert('The product has been shared!');
  }
  addLike(product: any) {
    product.like += 1;
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  shareOnTelegram(sellerUsername: string, messageText: string) {
   
    const telegramUrl = `https://t.me/${sellerUsername}?text=${encodeURIComponent("bexeit")}`;
    window.open(telegramUrl, '_blank');
  }
}

