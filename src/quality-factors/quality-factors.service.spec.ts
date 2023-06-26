import { Test, TestingModule } from '@nestjs/testing';
import { QualityFactorsService } from './quality-factors.service';

describe('QualityFactorsService', () => {
  let service: QualityFactorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QualityFactorsService],
    }).compile();

    service = module.get<QualityFactorsService>(QualityFactorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
