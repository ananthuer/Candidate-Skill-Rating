import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
        
    @ApiProperty()
    UserName: string;
  
    @ApiProperty()
    Password: string;
}
