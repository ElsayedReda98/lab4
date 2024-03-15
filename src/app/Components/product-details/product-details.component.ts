import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { ProductsService } from '../../Services/products/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  _product!: IProduct | undefined;
  isLastIndex: boolean = false;
  isFirstIndex: boolean = false;
  constructor(
    private _productService: ProductsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit(): void {
    // let idAsString = this._activatedRoute.snapshot.paramMap.get('id');
    this._activatedRoute.paramMap.subscribe((param) => {
      let idAsString = param.get('id');
      let id = Number(idAsString);
      this._product = this._productService.getProductById(id);
      this.isLastIndex = this._productService.isLastIndex(id);
      this.isFirstIndex = this._productService.isFirstIndex(id);
    });
  }

  goNext(id: number) {
    let nextId = this._productService.getNextId(id);
    this._router.navigate(['/product', nextId]);
  }

  goPrev(id: number) {
    let previousId = this._productService.getPreviousId(id);
    this._router.navigate(['/product', previousId]);
  }
  goBack() {
    this._router.navigate(['/home']);
  }
}
