import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  
  constructor(
    @InjectRepository(User)
    private userRepository : Repository<User>
  ) {}

  registerUser(createUserDto: CreateUserDto){
    createUserDto.userPassword = bcrypt.hashSync(createUserDto.userPassword, 5)
    this.userRepository.save(createUserDto)
  }

  async loginUser(loginUserDto: LoginUserDto){
    const user = await this.userRepository.findOne({
      where: {userEmail : loginUserDto.userEmail}
    })
    if(!user) throw new UnauthorizedException('No estas autorizado');
    const match = await bcrypt.compare(loginUserDto.userPassword, user.userPassword)
    if(!match) throw new UnauthorizedException('No estas autorizado');
    const token = jwt.sign(JSON.stringify(user), 'SECRET_KEY')
    return token;
  }
}
