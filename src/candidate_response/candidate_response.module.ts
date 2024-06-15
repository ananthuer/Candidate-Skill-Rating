import { Module } from '@nestjs/common';
import { CandidateResponseService } from './candidate_response.service';
import { CandidateResponseController } from './candidate_response.controller';

@Module({
  controllers: [CandidateResponseController],
  providers: [CandidateResponseService],
})
export class CandidateResponseModule {}
