import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { JWT_EXPIRES_IN, JWT_KEY } from './constants/jwt.constants';

@Module({
  imports:[TypeOrmModule.forFeature([User]),
           JwtModule.register({
            secret: JWT_KEY,
            signOptions: { expiresIn: JWT_EXPIRES_IN },
            global: true
           })
          ],
  
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
