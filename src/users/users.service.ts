import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';
import { error } from 'console';
import { catchError } from 'rxjs';
import { resolve } from 'path';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
  
  create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto)
    return this.userRepository.save(newUser);
  }

  login(user: LoginUserDto) {
    const u = this.userRepository.findOne({
      where: {
        username: user.username,
        password: user.password
      }
    })
    let retorno = u.then((u) => {return [{username: u.username, project: u.project, admin: u.admin}]})
    .catch(error => {return error})

    return retorno
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
