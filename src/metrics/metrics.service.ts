import { Injectable } from '@nestjs/common';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Metric } from './entities/metric.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MetricsService {
  constructor(private readonly httpService: HttpService, @InjectRepository(Metric) private metricRepository: Repository<Metric>) {}

  apiurl:string = 'http://gessi-dashboard.essi.upc.edu:8888/api/metrics'

  create(createMetricDto: CreateMetricDto) {
    const newMetric = this.metricRepository.create(createMetricDto)
    return this.metricRepository.save(newMetric);
  }

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
