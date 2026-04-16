import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Book } from './entities/book.entity';
import { AiAanlizerModule } from '../ai-aanlizer/ai-aanlizer.module';

@Module({
  imports: [TypeOrmModule.forFeature([Book]), AiAanlizerModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
