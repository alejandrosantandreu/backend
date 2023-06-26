import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StrategicIndicatorsService } from './strategic-indicators.service';
import { CreateStrategicIndicatorDto } from './dto/create-strategic-indicator.dto';
import { UpdateStrategicIndicatorDto } from './dto/update-strategic-indicator.dto';

@Controller('strategic-indicators')
export class StrategicIndicatorsController {
  constructor(private readonly strategicIndicatorsService: StrategicIndicatorsService) {}

  @Get(':id')
  findOne(@Param('id') id: string): any {
    return this.strategicIndicatorsService.findOne(id);
  }

  @Get('/:id/:from/:to')
  findHistoric(@Param('id') id: string, @Param('from') from: string, @Param('to') to: string) {
    return this.strategicIndicatorsService.findHistoric(id, from, to);
  }
}
