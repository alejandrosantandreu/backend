import { Injectable } from '@nestjs/common';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, max } from 'rxjs';
import { Metric } from './entities/metric.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';

@Injectable()
export class MetricsService {
  constructor(private readonly httpService: HttpService, @InjectRepository(Metric) private metricRepository: Repository<Metric>) {}

  apiurl:string = 'http://gessi-dashboard.essi.upc.edu:8888/api/metrics'

  create(createMetricDto: CreateMetricDto) {
    const newMetric = this.metricRepository.create(createMetricDto)
    return this.metricRepository.save(newMetric);
  }

  async findOne(id: string): Promise<Metric[]> {
    const u = this.metricRepository.find({
      where: {
        project: id,
        date: '2023-10-16'
      }
    })
    .catch(error => {return error})

    return u
    const { data } = await firstValueFrom(
      this.httpService.get(this.apiurl+'/current?prj='+id).pipe(),
    );
    return data;
  }

  changeDate(date: Date, rang: string) {
    let aux = date.getDate()
    let x = rang.split('-')
    let respuesta = ''
    if(aux == 1) x[1] = (parseInt(x[1]) + 1).toString()
    if(x[1] == '1') x[0] = (parseInt(x[0]) + 1).toString()
    if(parseInt(x[1]) < 10) x[1] = '0' + x[1]

    respuesta = x[0] + '-' + x[1] + '-' + aux.toString()
    return respuesta
  }

  async findHistoric(id: string, from: string, to: string): Promise<Metric[]> {
    let f = new Date(from)
    let t = new Date(to)
    let rang = from
    let list: string[] = []
    for(let i = f.getDate(); i <= t.getDate(); i++) {
      f.setDate(f.getDate() + 1)
      rang = this.changeDate(f, rang)
      list.push(rang)
    }
    const u = this.metricRepository.find({
      where: {
        project: id,
        date: Between(from, to)
      }
    })
    .catch(error => {return error})
    
    return u

    const { data } = await firstValueFrom(
      this.httpService.get(this.apiurl+'/historical?prj='+id+'&from='+from+'&to='+to).pipe(),
    );
    return data;
  }

}
