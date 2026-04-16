import { Test, TestingModule } from '@nestjs/testing';
import { AiAanlizerService } from './ai-aanlizer.service';

describe('AiAanlizerService', () => {
  let service: AiAanlizerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AiAanlizerService],
    }).compile();

    service = module.get<AiAanlizerService>(AiAanlizerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
