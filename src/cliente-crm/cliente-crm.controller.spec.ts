import { Test, TestingModule } from '@nestjs/testing';
import { ClienteCrmController } from './cliente-crm.controller';

describe('Cliente Controller', () => {
  let controller: ClienteCrmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClienteCrmController],
    }).compile();

    controller = module.get<ClienteCrmController>(ClienteCrmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
