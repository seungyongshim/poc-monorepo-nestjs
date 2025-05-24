import { Test, TestingModule } from '@nestjs/testing';
import { CommonTypesService } from './common-types.service';

describe('CommonTypesService', () => {
  let service: CommonTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonTypesService],
    }).compile();

    service = module.get<CommonTypesService>(CommonTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
