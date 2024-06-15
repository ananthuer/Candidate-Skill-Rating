import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Question } from 'src/question/entities/question.entity';

import { User } from 'src/user/entities/user.entity';



@Table
export class CandidateResponse extends Model {

    @ForeignKey(() => Question)
    @Column({})
    QuestionId: number;

    @BelongsTo(() => Question, {foreignKey: "QuestionId", as: "Question"})
    Question: Question;

    @ForeignKey(() => User)
    @Column({})
    CandidateId: number;

    @BelongsTo(() => User)
    Candidate: User;

    @Column({type: DataType.STRING})
    Response: string;

    @Column({type: DataType.INTEGER})
    Rating: number
}


