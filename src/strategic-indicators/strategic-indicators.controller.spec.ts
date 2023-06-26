import { Test, TestingModule } from '@nestjs/testing';
import { StrategicIndicatorsController } from './strategic-indicators.controller';
import { StrategicIndicatorsService } from './strategic-indicators.service';

describe('StrategicIndicatorsController', () => {
  let controller: StrategicIndicatorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StrategicIndicatorsController],
      providers: [StrategicIndicatorsService],
    }).compile();

    controller = module.get<StrategicIndicatorsController>(StrategicIndicatorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
