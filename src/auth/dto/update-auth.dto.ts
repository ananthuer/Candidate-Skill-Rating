import { PartialType } from '@nestjs/swagger';
import { LoginUserDto } from './create-auth.dto';

export class UpdateAuthDto extends PartialType(LoginUserDto) {}
