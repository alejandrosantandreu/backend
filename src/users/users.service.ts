import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
  
  create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto)
    return this.userRepository.save(newUser);
  }

  login(user: LoginUserDto) {
    let username = user.username
    const u = this.userRepository.findOne({
      where: {
        username
      }
    })
    return u
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return 
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
