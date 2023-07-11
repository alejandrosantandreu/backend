import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(private readonly httpService: HttpService) {}

  apiurl:string = 'http://gessi-dashboard.essi.upc.edu:8888/api/projects'

  async findAll(): Promise<Project[]> {
    const { data } = await firstValueFrom(
      this.httpService.get(this.apiurl).pipe(),
    );
    return data;
  }
}
