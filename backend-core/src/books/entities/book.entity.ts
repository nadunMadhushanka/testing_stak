import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Books')
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bookName: string;

    @Column()
    author: string;

    @Column({ name: 'publication_date', type: 'timestamp', nullable: true })
    publicationDate: Date;

    @CreateDateColumn()
    createdAt: Date;
}
