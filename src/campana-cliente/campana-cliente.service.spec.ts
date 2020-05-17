import { Test, TestingModule } from '@nestjs/testing';
import { CampanaClienteService } from './campana-cliente.service';

describe('ProductService', () => {
  let service: CampanaClienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampanaClienteService],
    }).compile();

    service = module.get<CampanaClienteService>(CampanaClienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
