import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QualityFactorsService } from './quality-factors.service';
import { CreateQualityFactorDto } from './dto/create-quality-factor.dto';
import { UpdateQualityFactorDto } from './dto/update-quality-factor.dto';

@Controller('quality-factors')
export class QualityFactorsController {
  constructor(private readonly qualityFactorsService: QualityFactorsService) {}

  @Post()
  create(@Body() createQualityFactorDto: CreateQualityFactorDto) {
    return this.qualityFactorsService.create(createQualityFactorDto);
  }


  @Get(':id')
  findOne(@Param('id') id: string): any {
    return this.qualityFactorsService.findOne(id);
  }

  @Get('/:id/:from/:to')
  findHistoric(@Param('id') id: string, @Param('from') from: string, @Param('to') to: string) {
    return this.qualityFactorsService.findHistoric(id, from, to);
  }
}
