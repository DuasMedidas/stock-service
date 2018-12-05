import { Injectable } from '@nestjs/common';
import { ProductType } from './product-type';

@Injectable()
export class ProductTypeService {

    private readonly productTypes: ProductType[] = [
        new ProductType(1, 'Bolos', 'Bolos de todos os gostos'),
        new ProductType(2, 'Doces', 'Doces para todos os gostos'),
        new ProductType(3, 'Paes', 'Paes para todos os gostos'),
    ];

    findAll(): ProductType[]{
        return this.productTypes;
    }

}
