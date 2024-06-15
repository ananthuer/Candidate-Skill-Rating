import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStrategy } from './local.startgey';
import { JwtStrategy } from './jwt.startegy';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constant';

@Module({
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtService, LocalStrategy, JwtStrategy,],
  exports:[AuthService]
})
export class AuthModule {}
