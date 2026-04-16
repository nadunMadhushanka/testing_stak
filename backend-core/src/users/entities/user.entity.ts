import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum userRole {
    ADMIN = 'admin',
    USER = 'user',
}
@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column('enum', { enum: userRole, default: userRole.USER })
  role: userRole;
}
