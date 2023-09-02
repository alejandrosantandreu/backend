import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';
import { Repository } from 'typeorm';
import { AxiosHeaders } from 'axios';

@Injectable()
export class ProjectsService {
  constructor(private readonly httpService: HttpService, @InjectRepository(Project) private projectRepository: Repository<Project>) {}

  apiurl:string = 'http://gessi-dashboard.essi.upc.edu:8888/api/projects'

  create(createProjectDto: CreateProjectDto) {
    const newProject = this.projectRepository.create(createProjectDto)
    return this.projectRepository.save(newProject);
  }

  async findAll(): Promise<Project[]> {
    let headers = new AxiosHeaders({
      accept: 'text/html, application/xhtml+xml, */*',
      'Content-Type': 'application/json',
      'Acces-Control-Allow-Origin': '*',
      'Acces-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS, DELETE',
      'Acces-Control-Allow-Headers': 
        'Content-Type, Acces-Control-Allow-Headers, Authorization, X-Request-With',
    });

    const { data } = await firstValueFrom(
      this.httpService.get(this.apiurl, {headers: headers}).pipe(),
    );
    return data;
  }
}
