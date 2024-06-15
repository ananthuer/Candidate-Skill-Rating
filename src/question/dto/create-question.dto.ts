import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionDto {

     
    @ApiProperty()
    Question: string;
  
    @ApiProperty()
    SkillId: number;
  
    @ApiProperty()
    Difficulty_level: string;
}
