import { Module } from '@nestjs/common';
import { QualityFactorsService } from './quality-factors.service';
import { QualityFactorsController } from './quality-factors.controller';
import { HttpModule } from '@nestjs/axios';
import { QualityFactor } from './entities/quality-factor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    TypeOrmModule.forFeature([QualityFactor])
  ],
  controllers: [QualityFactorsController],
  providers: [QualityFactorsService]
})
export class QualityFactorsModule {}
