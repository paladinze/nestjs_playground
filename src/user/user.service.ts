import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository, DeleteResult } from 'typeorm';
import { UserEntity } from './user.entity';

export type User = any;

@Injectable()
export class UserService {
  private readonly users: any[];

  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepo: Repository<UserEntity>,
  ) {
    this.users = [{userId: 1, username: 'paladinze', password: '921021'}];
  }

  findAll(): Promise<UserEntity[]> {
    return this.usersRepo.find();
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  // findOne(id: string): Promise<UserEntity> {
  //   return this.usersRepo.findOne(id);
  // }

  async delete(id: string): Promise<DeleteResult> {
    return await this.usersRepo.delete(id);
  }

}
