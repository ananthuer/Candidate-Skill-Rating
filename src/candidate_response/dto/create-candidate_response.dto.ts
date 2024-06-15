import { ApiProperty } from '@nestjs/swagger';

export class CreateCandidateResponseDto {

    
    @ApiProperty()
    Response: string;
  
    @ApiProperty()
    Rating: number;
}
