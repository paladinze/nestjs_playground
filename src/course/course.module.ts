import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { Logger } from 'src/common/middleware/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './course.entity';
import { AuthModule } from 'src/auth/auth.module';
// import { Logger2 } from 'src/common/middleware/logger-functional';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity]), AuthModule],
  controllers: [CourseController],
  providers: [CourseService],
  exports: [CourseService, TypeOrmModule],
})
export class CoursesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Logger).forRoutes(CourseController);
  }
}