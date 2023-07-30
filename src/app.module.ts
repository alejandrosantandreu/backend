import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { MetricsModule } from './metrics/metrics.module';
import { QualityFactorsModule } from './quality-factors/quality-factors.module';
import { StrategicIndicatorsModule } from './strategic-indicators/strategic-indicators.module';
import { CategoriesModule } from './categories/categories.module';
import { ProjectsModule } from './projects/projects.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [__dirname + '/**/entities/*.entity.ts'],
      synchronize: true,
    }),
    MetricsModule,
    QualityFactorsModule,
    StrategicIndicatorsModule,
    CategoriesModule,
    ProjectsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
