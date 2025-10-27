import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password : string

    @UpdateDateColumn({name : "updated_at"})
    updatedAt : Date

    @CreateDateColumn({name : "created_at"})
    createdAt : Date
}