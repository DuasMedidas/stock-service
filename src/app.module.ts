import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientsController } from './ingredients/ingredients.controller';
import { ProductTypeController } from './product-type/product-type.controller';

@Module({
  imports: [],
  controllers: [AppController, IngredientsController, ProductTypeController],
  providers: [AppService],
})
export class AppModule {}
