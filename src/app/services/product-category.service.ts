import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../models/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  private categoriesTable = 'product-categories';

  constructor(private afs: AngularFirestore) { }

  getCategoriesOLD() {
    return this.afs.collection(this.categoriesTable).snapshotChanges();
  }

  getCategories() {
    // return this.afs.collection(this.productsTable).snapshotChanges();
    return this.afs.collection(this.categoriesTable).snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as ProductCategory;
          const id = action.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
}
