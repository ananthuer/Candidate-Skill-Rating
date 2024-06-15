import { Sequelize } from 'sequelize-typescript';

import * as dotenv from 'dotenv';

import { CandidateResponse } from './candidate_response/entities/candidate_response.entity';
import { User } from './user/entities/user.entity';
import { Question } from './question/entities/question.entity';




dotenv.config();

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',

    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: "localhost",
        port:  5432,
        username: "postgres",
        password: "1316",
        database: "candidate",
        
      });

      sequelize.addModels([
       CandidateResponse,
       User,
       Question
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
