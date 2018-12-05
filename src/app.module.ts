import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientsController } from './ingredients/ingredients.controller';
import { ProductTypeController } from './product-type/product-type.controller';
import { ProductTypeService } from './product-type/product-type.service';

@Module({
  imports: [],
  controllers: [ 
    AppController, 
    IngredientsController, 
    ProductTypeController 
  ],
  providers: [ AppService, ProductTypeService ],
})
export class AppModule {}
