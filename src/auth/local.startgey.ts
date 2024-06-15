
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log('adad')
    const user = await this.authService.validateUser(username, password);

    console.log('adad')

    if (!user) {
        console.log('Invalid credentials'); 
      //throw new UnauthorizedException();
    }
    return user;
  }
}