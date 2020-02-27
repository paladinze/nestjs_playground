import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository, DeleteResult } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepo: Repository<UserEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {
    return this.usersRepo.find();
  }

  findOne(id: string): Promise<UserEntity> {
    return this.usersRepo.findOne(id);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.usersRepo.delete(id);
  }

}
