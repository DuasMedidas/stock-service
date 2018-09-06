import { Test, TestingModule } from '@nestjs/testing';
import { IngredientsController } from './ingredients.controller';

describe('Ingredients Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [IngredientsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: IngredientsController = module.get<IngredientsController>(IngredientsController);
    expect(controller).toBeDefined();
  });
});
