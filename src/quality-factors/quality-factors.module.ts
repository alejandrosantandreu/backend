import { Module } from '@nestjs/common';
import { QualityFactorsService } from './quality-factors.service';
import { QualityFactorsController } from './quality-factors.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [QualityFactorsController],
  providers: [QualityFactorsService]
})
export class QualityFactorsModule {}
