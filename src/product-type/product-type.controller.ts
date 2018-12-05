import { Controller, Get } from '@nestjs/common';
import { ProductTypeService } from './product-type.service';
import { ProductType } from './product-type';

@Controller('product-type')
export class ProductTypeController {

    constructor(
        private readonly productTypeService: ProductTypeService
    ){}

    @Get()
    async findAll() {
        const productTypes: ProductType[] = await this.productTypeService.findAll();
        return productTypes;
    }

}
