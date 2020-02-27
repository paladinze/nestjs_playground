import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CourseEntity } from 'src/course/course.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isAdmin: boolean;

  @OneToMany(type => CourseEntity, course => course.likedByUser)
  likedCourses: CourseEntity[];
}