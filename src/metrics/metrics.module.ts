import { Module } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { MetricsController } from './metrics.controller';
import { HttpModule } from '@nestjs/axios';
import { Metric } from './entities/metric.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    TypeOrmModule.forFeature([Metric])
  ],
  controllers: [MetricsController],
  providers: [MetricsService]
})
export class MetricsModule {}
