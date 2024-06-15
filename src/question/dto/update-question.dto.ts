import { PartialType } from '@nestjs/swagger';
import { CreateQuestionDto } from './create-question.dto';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {

    
    @ApiProperty()
    Question: string;
  
    @ApiProperty()
    SkillId: number;
  
    @ApiProperty()
    Difficulty_level: string;
}
