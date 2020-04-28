import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsTable = 'products';

  constructor(private afs: AngularFirestore) { }

  getProducts() {
    // return this.afs.collection(this.productsTable).snapshotChanges();
    return this.afs.collection(this.productsTable).snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Product;
          const id = action.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getProduct(productId) {
    return this.afs.doc(this.productsTable + '/' + productId).valueChanges();
  }

  deleteProduct(productId) {
    return this.afs.doc(this.productsTable + '/' + productId).delete();
  }

  saveProduct(product) {
    return this.afs.collection(this.productsTable).add(product);
  }

  updateProduct(productId, product) {
    return this.afs.doc(this.productsTable + '/' + productId).update(product);
  }
}
