import { Test, TestingModule } from '@nestjs/testing';
import { ProductTypeController } from './product-type.controller';

describe('ProductType Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ProductTypeController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ProductTypeController = module.get<ProductTypeController>(ProductTypeController);
    expect(controller).toBeDefined();
  });
});
