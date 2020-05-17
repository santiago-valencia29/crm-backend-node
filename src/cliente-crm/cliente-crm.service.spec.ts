import { Test, TestingModule } from '@nestjs/testing';
import { ClienteCrmService } from './cliente-crm.service';

describe('ClienteService', () => {
  let service: ClienteCrmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClienteCrmService],
    }).compile();

    service = module.get<ClienteCrmService>(ClienteCrmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
