import { Module } from '@nestjs/common';
import { CoursesModule } from './course/course.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/user.module';
import ormconfig from './configs/ormconfig';

@Module({
  imports: [
    CoursesModule,
    TypeOrmModule.forRoot(ormconfig),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
