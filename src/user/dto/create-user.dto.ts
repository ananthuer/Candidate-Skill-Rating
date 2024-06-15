import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

    @ApiProperty()
    Name: string;
  
    @ApiProperty()
    Roles: number;
  
    @ApiProperty()
    Email: string;
  
    @ApiProperty()
    Password: string;
}
