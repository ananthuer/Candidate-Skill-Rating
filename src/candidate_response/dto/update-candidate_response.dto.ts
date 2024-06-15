import { PartialType } from '@nestjs/mapped-types';
import { CreateCandidateResponseDto } from './create-candidate_response.dto';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateCandidateResponseDto extends PartialType(CreateCandidateResponseDto) {

    @ApiProperty()
    Response: string;
  
    @ApiProperty()
    Rating: number;
}
