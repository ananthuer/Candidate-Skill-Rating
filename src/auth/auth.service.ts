import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginUserDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(  private userService: UserService,
    private jwtService: JwtService,){}
  create(createAuthDto: LoginUserDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    if (user && await bcrypt.compare(pass, user.Password)) {
      const { Password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginDto: any) {

    const user = await this.userService.findOneByEmail(loginDto.UserName);
    if(!user){
      throw new UnauthorizedException();
    }
    if (user && await bcrypt.compare(loginDto.Password, user.Password)) {
      const { Password, ...result } = user;
      const payload = { username: user.Email, sub: user.id, role: user.Role };

      return {
        access_token: this.jwtService.sign(payload, { secret: 'local'}),
      };
    }
    
   
  }
}
