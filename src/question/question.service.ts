import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './entities/question.entity';
import { CandidateResponse } from 'src/candidate_response/entities/candidate_response.entity';

@Injectable()
export class QuestionService {
 async create(createQuestionDto: CreateQuestionDto) {

    return await Question.create({
      Question:createQuestionDto.Question,
      SkillId:createQuestionDto.SkillId,
      Difficulty_level:createQuestionDto.Difficulty_level
    })
  }

 async findAll() {
    return await Question.findAll({
      include:{
        model:CandidateResponse
      }
    })
  }

async  findOne(id: number) {
    return await Question.findByPk(id, {
      include:{
        model:CandidateResponse
      }
    })
  }

 async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return await Question.update({
      Question:updateQuestionDto.Question,
      SkillId:updateQuestionDto.SkillId,
      Difficulty_level:updateQuestionDto.Difficulty_level
    },{
      where:{
        id:id
      }
    })
  }

 async remove(id: number) {
    return await Question.destroy({
      where:{id:id}
    })
  }
}
