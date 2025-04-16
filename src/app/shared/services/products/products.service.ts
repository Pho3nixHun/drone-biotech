import { Injectable } from '@angular/core';
import { products } from './products.mock';
import { ProductItemXVM } from 'src/app/pages/landing-page/landing-page-vm.model';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    public getProductById(index: string): ProductItemXVM | undefined {
        return products.find((item) => item.id === index);
    }

    public getAllProducts(): ProductItemXVM[] {
        return products;
    }
}
