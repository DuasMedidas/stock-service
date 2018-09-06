import { Controller, Get } from '@nestjs/common';

@Controller('ingredients')
export class IngredientsController {

    @Get()
    findByProductTypeId(){
        return ' Ingredients OK!! ';
    }
}
