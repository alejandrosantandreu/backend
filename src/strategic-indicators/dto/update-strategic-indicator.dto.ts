import { PartialType } from '@nestjs/mapped-types';
import { CreateStrategicIndicatorDto } from './create-strategic-indicator.dto';

export class UpdateStrategicIndicatorDto extends PartialType(CreateStrategicIndicatorDto) {}
