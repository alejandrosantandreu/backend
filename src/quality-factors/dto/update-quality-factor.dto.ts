import { PartialType } from '@nestjs/mapped-types';
import { CreateQualityFactorDto } from './create-quality-factor.dto';

export class UpdateQualityFactorDto extends PartialType(CreateQualityFactorDto) {}
