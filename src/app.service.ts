import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { catchError, firstValueFrom } from 'rxjs';


@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

}
