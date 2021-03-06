import { Controller, Get, Post, HttpCode, Param, Body, UseGuards } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './interfaces/course.interface';
import { CourseService } from './course.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';

@ApiTags('courses')
@Controller('courses')
export class CourseController {

  constructor(private readonly coursesService: CourseService){}

  @UseGuards(JwtAuthGuard)
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
