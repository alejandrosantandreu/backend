import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(private readonly httpService: HttpService) {}

  apiurl:string = 'http://gessi-dashboard.essi.upc.edu:8888/api/metrics/categories'

  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  async findAll(): Promise<Category[]> {
    const { data } = await firstValueFrom(
      this.httpService.get(this.apiurl).pipe(),
    );
    return data;
  }
}