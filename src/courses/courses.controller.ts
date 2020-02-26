import { Controller, Get, Post, HttpCode, Param, Body } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './interfaces/course.interface';
import { CoursesService } from './courses.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('courses')
@Controller('courses')
export class CoursesController {

  constructor(private readonly coursesService: CoursesService){}

  @Get()
  async findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findById(@Param() params: { id: string }): string {
    return "found a course with Id: " + params.id;
  }


  @Post()
  @HttpCode(201)
  async create(@Body() createCourseDto: CreateCourseDto) {
    this.coursesService.create(createCourseDto);
  }
}
