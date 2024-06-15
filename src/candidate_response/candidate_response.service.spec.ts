import { Test, TestingModule } from '@nestjs/testing';
import { CandidateResponseService } from './candidate_response.service';

describe('CandidateResponseService', () => {
  let service: CandidateResponseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CandidateResponseService],
    }).compile();

    service = module.get<CandidateResponseService>(CandidateResponseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
