import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidateResponseModule } from './candidate_response/candidate_response.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './DatabaseModule';
import { AuthModule } from './auth/auth.module';
import { QuestionModule } from './question/question.module';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [DatabaseModule, CandidateResponseModule, UserModule, AuthModule, QuestionModule],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule {}
