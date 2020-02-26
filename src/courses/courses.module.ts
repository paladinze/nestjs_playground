import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { Logger } from 'src/common/middleware/logger.middleware';
// import { Logger2 } from 'src/common/middleware/logger-functional';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  exports: [CoursesService],
})
export class CoursesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Logger).forRoutes(CoursesController);
  }
}