import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(private readonly httpService: HttpService, @InjectRepository(Category) private categoryRepository: Repository<Category>) {}

  apiurl:string = 'http://gessi-dashboard.essi.upc.edu:8888/api/metrics/categories'

  create(createCategoryDto: CreateCategoryDto) {
    //const newCategory = this.categoryRepository.create(createCategoryDto)
    //return this.categoryRepository.save(newCategory);
  }

  async findAll(): Promise<Category[]> {
    const { data } = await firstValueFrom(
      this.httpService.get(this.apiurl).pipe(),
    );
    return data;
  }
}