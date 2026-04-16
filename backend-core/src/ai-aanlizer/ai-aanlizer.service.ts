import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { CreateBookDto } from '../books/dto/create-book.dto';

@Injectable()
export class AiAanlizerService {
  constructor(private readonly httpService: HttpService) {}
  private readonly pythonEndpoint = 'http://backend-ai:8000/api/v1/enhance';

  async analyze(createBookDto: CreateBookDto) {
    const data = await firstValueFrom(
      this.httpService.post(this.pythonEndpoint, {
        name: createBookDto.bookName,
      }),
    );
    return data;
  }
}
