import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { CourseEntity } from "src/course/course.entity";
import { UserEntity } from "src/user/user.entity";

const ormconfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'paladinze',
  password: '921021',
  database: 'huoshui',
  entities: [UserEntity, CourseEntity],
  synchronize: true,
}

export default ormconfig;