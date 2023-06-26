import { Test, TestingModule } from '@nestjs/testing';
import { StrategicIndicatorsService } from './strategic-indicators.service';

describe('StrategicIndicatorsService', () => {
  let service: StrategicIndicatorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StrategicIndicatorsService],
    }).compile();

    service = module.get<StrategicIndicatorsService>(StrategicIndicatorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
