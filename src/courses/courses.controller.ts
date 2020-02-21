import { Controller, Get, Req, Post, HttpCode, Redirect, Param, Body } from '@nestjs/common';
import { Request } from 'express';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './interfaces/course.interface';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {

  constructor(private readonly coursesService: CoursesService){}

  @Get()
  async findAll(@Req() request: Request): Promise<Course[]> {
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
