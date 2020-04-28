import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  id;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    categoryService: ProductCategoryService,
    private productService: ProductService) {
    this.categories$ = categoryService.getCategories();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.getProduct(this.id).pipe(take(1)).subscribe(p => {
        this.product = p;
      });
    }
  }

  save(product) {
    if (this.id) {
      this.productService.updateProduct(this.id, product);
    } else {
      this.productService.saveProduct(product);
    }

    this.router.navigate(['/manage-products']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete the product?')) {
      return;
    }

    this.productService.deleteProduct(this.id);
    this.router.navigate(['/manage-products']);
  }

  ngOnInit(): void {
  }

}
