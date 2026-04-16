import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  category: string;

  @Column('float', { default: 0 })
  price: number;
  @Column({ type: 'text', nullable: true })
  ai_description: string;
  @Column('simple-array', { nullable: true })
  tags: string[];

  @Column({ name: 'proceed_at', type: 'timestamp', nullable: true })
  proceedAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}
