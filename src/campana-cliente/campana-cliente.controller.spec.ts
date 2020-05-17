import { Test, TestingModule } from '@nestjs/testing';
import { CampanaClienteController } from './campana-cliente.controller';

describe('CampanaCliente Controller', () => {
  let controller: CampanaClienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampanaClienteController],
    }).compile();

    controller = module.get<CampanaClienteController>(CampanaClienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
