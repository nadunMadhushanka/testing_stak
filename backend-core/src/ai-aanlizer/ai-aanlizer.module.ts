import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AiAanlizerService } from './ai-aanlizer.service';

@Module({
  imports: [HttpModule],
  providers: [AiAanlizerService],
  exports: [AiAanlizerService],
})
export class AiAanlizerModule {}
