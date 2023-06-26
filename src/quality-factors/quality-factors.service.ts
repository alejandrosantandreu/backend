import { Injectable } from '@nestjs/common';
import { CreateQualityFactorDto } from './dto/create-quality-factor.dto';
import { UpdateQualityFactorDto } from './dto/update-quality-factor.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { QualityFactor } from './entities/quality-factor.entity';

@Injectable()
export class QualityFactorsService {
  constructor(private readonly httpService: HttpService) {}

  apiurl:string = 'http://gessi-dashboard.essi.upc.edu:8888/api/qualityFactors'

  async findOne(id: string): Promise<QualityFactor[]> {
    const { data } = await firstValueFrom(
      this.httpService.get(this.apiurl+'/current?prj='+id).pipe(),
    );
    return data;
  }

  async findHistoric(id: string, from: string, to: string): Promise<QualityFactor[]> {
    const { data } = await firstValueFrom(
      this.httpService.get(this.apiurl+'/historical?prj='+id+'&from='+from+'&to='+to).pipe(),
    );
    return data;
  }

}
