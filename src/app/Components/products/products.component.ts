import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  input,
} from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import productList from '../../../assets/productlist';
import { BorderDirective } from '../../Directives/border-directive.directive';
import { SingleProductComponent } from '../single-product/single-product.component';
import { ProductsService } from '../../Services/products/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [BorderDirective, SingleProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnChanges {
  constructor(private _productsService: ProductsService) {}
  ngOnChanges(): void {
    this._products = this._productsService.getProductsByName(this.filterValue);
  }
  _productsCart: IProduct[] = [];
  _products: IProduct[] = productList;
  @Input() filterValue: string = '';

  addToCart(newCartItem: IProduct) {
    this._productsCart.push(newCartItem);
  }

  handleBuy(product: IProduct) {
    if (product.quantity) product.quantity--;
  }
}
