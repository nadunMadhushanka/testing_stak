import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  bookName: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsDateString()
  publicationDate: string;
}
