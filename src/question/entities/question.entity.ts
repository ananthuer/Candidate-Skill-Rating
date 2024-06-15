import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { CandidateResponse } from 'src/candidate_response/entities/candidate_response.entity';


export enum DifficultyLevel {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

@Table
export class Question extends Model{
 

  @Column({type: DataType.INTEGER})
  SkillId: number;

  @Column({type: DataType.STRING})
  Question: string;

  @Column({
    type: 'enum',
    values: Object.values(DifficultyLevel),
  })
  Difficulty_level: DifficultyLevel;


  @HasMany(() => CandidateResponse)
  responses: CandidateResponse[];
}


