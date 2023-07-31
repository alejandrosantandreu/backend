import { Module } from '@nestjs/common';
import { StrategicIndicatorsService } from './strategic-indicators.service';
import { StrategicIndicatorsController } from './strategic-indicators.controller';
import { HttpModule } from '@nestjs/axios';
import { StrategicIndicator } from './entities/strategic-indicator.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    TypeOrmModule.forFeature([StrategicIndicator])
  ],
  controllers: [StrategicIndicatorsController],
  providers: [StrategicIndicatorsService]
})
export class StrategicIndicatorsModule {}
