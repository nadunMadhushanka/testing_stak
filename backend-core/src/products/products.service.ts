import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { EnrichResponse } from './interfaces/products.interface';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ProductsService {
  private readonly logger = new Logger(ProductsService.name);

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    private readonly httpService: HttpService,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const pythonUrl = 'http://backend-ai:8000/api/v1/enrich';

    const { data } = await firstValueFrom(
      this.httpService.post<EnrichResponse>(pythonUrl, {
        name: createProductDto.name,
        category: createProductDto.category,
      }),
    );
    const newProduct = this.productRepository.create({
      ...createProductDto,
      ai_description: data.description,
      tags: data.tags,
      proceedAt: new Date(),
    });
    return await this.productRepository.save(newProduct);
  }

  async findAll() {
    return this.productRepository.find();
  }

  async findOne(id: number) {
    return this.productRepository.findOneBy({ id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.productRepository.update(id, updateProductDto);
    return this.productRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.productRepository.delete(id);
    return { deleted: true };
  }
}
