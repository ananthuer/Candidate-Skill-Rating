import { Injectable } from '@nestjs/common';
import { CreateCandidateResponseDto } from './dto/create-candidate_response.dto';
import { UpdateCandidateResponseDto } from './dto/update-candidate_response.dto';
import { CandidateResponse } from './entities/candidate_response.entity';
import { Question } from 'src/question/entities/question.entity';

@Injectable()
export class CandidateResponseService {
 async create(createCandidateResponseDto: CreateCandidateResponseDto, questionId:any, candidateId:any) {
    return await CandidateResponse.create({
      QuestionId:questionId,
      Response:createCandidateResponseDto.Response,
      Rating:createCandidateResponseDto.Rating,
      CandidateId:candidateId
    })
  }

  async findAll() {
    return await CandidateResponse.findAll(
      {
        include:{
          model: Question
        }
      }
    )
  }

 async findOne(id: number) {
    return await CandidateResponse.findByPk(id)
  }

async  update(id: number, updateCandidateResponseDto: UpdateCandidateResponseDto) {
    return await CandidateResponse.update({
      Response:updateCandidateResponseDto.Response,
      Rating:updateCandidateResponseDto.Rating
    },{
      where:{id:id}
    })
  }

  async remove(id: number) {
    return await CandidateResponse.destroy({
      where:{id:id}
    })
  }

  async getAggregatedSkills(candidateId: number){

    const responses = await CandidateResponse.findAll({
      where: { CandidateId:candidateId },
      include: [{ model: Question}],
      });

      const skillsMap = new Map<number, { easy: number; medium: number; hard: number; total: number; sum: number }>();

responses.forEach(response => {
  const { SkillId, Difficulty_level } = response.Question;
  const skill = skillsMap.get(SkillId) || { easy: 0, medium: 0, hard: 0, total: 0, sum: 0 };

  let weight = 0;
  if (Difficulty_level === 'easy') weight = 1;
  if (Difficulty_level === 'medium') weight = 2;
  if (Difficulty_level === 'hard') weight = 3;

  skill.sum += weight * response.Rating;
  skill.total += weight;
  if (Difficulty_level === 'easy') skill.easy += 1;
  if (Difficulty_level === 'medium') skill.medium += 1;
  if (Difficulty_level === 'hard') skill.hard += 1;

  skillsMap.set(SkillId, skill);
});

const aggregatedSkills = [];
skillsMap.forEach((value, key) => {
  const rating = value.sum / value.total;
  aggregatedSkills.push({ skillId: key, rating });
});

return aggregatedSkills;

  }
}
