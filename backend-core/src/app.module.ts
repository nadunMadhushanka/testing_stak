import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { HttpModule } from '@nestjs/axios';
import { Product } from './products/entities/product.entity';
import { Book } from './books/entities/book.entity';
import { User } from './users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { AiAanlizerModule } from './ai-aanlizer/ai-aanlizer.module';
import { AuthMiddleware } from './auth/auth.middleware';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db', // The name of your service in docker-compose
      port: 5432,
      username: 'user', // From your docker-compose environment
      password: 'password', // From your docker-compose environment
      database: 'catalog_db', // From your docker-compose environment
      entities: [Product, Book, User], // MUST include every entity you create
      synchronize: true, // Auto-syncs your code to the DB tables
      autoLoadEntities: true,
      logging: true,
    }),
    ProductsModule,
    HttpModule,
    AiAanlizerModule,
    BooksModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
