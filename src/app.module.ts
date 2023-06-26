import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { MetricsModule } from './metrics/metrics.module';
import { QualityFactorsModule } from './quality-factors/quality-factors.module';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    MetricsModule,
    QualityFactorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
