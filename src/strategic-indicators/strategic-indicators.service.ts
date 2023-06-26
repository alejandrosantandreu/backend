import { Injectable } from '@nestjs/common';
import { CreateStrategicIndicatorDto } from './dto/create-strategic-indicator.dto';
import { UpdateStrategicIndicatorDto } from './dto/update-strategic-indicator.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { StrategicIndicator } from './entities/strategic-indicator.entity';

@Injectable()
export class StrategicIndicatorsService {
  constructor(private readonly httpService: HttpService) {}

  apiurl:string = 'http://gessi-dashboard.essi.upc.edu:8888/api/strategicIndicators'

  async findOne(id: string): Promise<StrategicIndicator[]> {
    const { data } = await firstValueFrom(
      this.httpService.get(this.apiurl+'/current?prj='+id).pipe(),
    );
    return data;
  }

  async findHistoric(id: string, from: string, to: string): Promise<StrategicIndicator[]> {
    const { data } = await firstValueFrom(
      this.httpService.get(this.apiurl+'/historical?prj='+id+'&from='+from+'&to='+to).pipe(),
    );
    return data;
  }
}
