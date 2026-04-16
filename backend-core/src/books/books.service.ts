import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { AiAanlizerService } from '../ai-aanlizer/ai-aanlizer.service';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
    private readonly aiAnalyzer: AiAanlizerService,
  ) {}

  async create(createBookDto: CreateBookDto) {
    const data = await this.aiAnalyzer.analyze(createBookDto);

    const newBook = this.bookRepository.create({ ...createBookDto, ...data });
    return this.bookRepository.save(newBook);
  }

  findAll() {
    return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
