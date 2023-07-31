import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() createCategoryDto: Array<CreateCategoryDto>) {
    for(let i = 0; i < createCategoryDto.length; i++) {
      this.categoriesService.create(createCategoryDto[i]);
    }
    return 
  }

  @Get('')
  findOne(): any {
    return this.categoriesService.findAll();
  }
}
