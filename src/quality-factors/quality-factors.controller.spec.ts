import { Test, TestingModule } from '@nestjs/testing';
import { QualityFactorsController } from './quality-factors.controller';
import { QualityFactorsService } from './quality-factors.service';

describe('QualityFactorsController', () => {
  let controller: QualityFactorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QualityFactorsController],
      providers: [QualityFactorsService],
    }).compile();

    controller = module.get<QualityFactorsController>(QualityFactorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
