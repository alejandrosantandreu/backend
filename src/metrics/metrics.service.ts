import { Injectable } from '@nestjs/common';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Metric } from './entities/metric.entity';

@Injectable()
export class MetricsService {
  constructor(private readonly httpService: HttpService) {}

  apiurl:string = 'http://gessi-dashboard.essi.upc.edu:8888/api/metrics'

  async findOne(id: string): Promise<Metric[]> {
    const { data } = await firstValueFrom(
      this.httpService.get(this.apiurl+'/current?prj='+id).pipe(),
    );
    return data;
  }

  async findHistoric(id: string, from: string, to: string): Promise<Metric[]> {
    const { data } = await firstValueFrom(
      this.httpService.get(this.apiurl+'/historical?prj='+id+'&from='+from+'&to='+to).pipe(),
    );
    return data;
  }

}
