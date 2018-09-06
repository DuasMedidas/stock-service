import { Controller, Get } from '@nestjs/common';

@Controller('product-type')
export class ProductTypeController {

    @Get()
    findAll() {
       return 'return all product types OK !!!';
    }

}
