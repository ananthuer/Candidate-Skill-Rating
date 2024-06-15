import { Test, TestingModule } from '@nestjs/testing';
import { CandidateResponseController } from './candidate_response.controller';
import { CandidateResponseService } from './candidate_response.service';

describe('CandidateResponseController', () => {
  let controller: CandidateResponseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandidateResponseController],
      providers: [CandidateResponseService],
    }).compile();

    controller = module.get<CandidateResponseController>(CandidateResponseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
