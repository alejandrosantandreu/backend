import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';

@Controller('/metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Post()
  create(@Body() createMetricDto: CreateMetricDto) {
    return this.metricsService.create(createMetricDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): any {
    return this.metricsService.findOne(id);
  }

  @Get('/:id/:from/:to')
  findHistoric(@Param('id') id: string, @Param('from') from: string, @Param('to') to: string) {
    return this.metricsService.findHistoric(id, new Date(from), new Date(to));
  }

}
