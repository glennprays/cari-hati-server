import { hash } from 'argon2';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
    BeforeInsert,
} from 'typeorm';

export enum Role {
    ADMIN = 'admin',
    USER = 'user',
}

@Entity()
@Unique(['email'])
export class Person {
    @PrimaryGeneratedColumn('uuid')
    personId: string;

    @Column()
    email: string;

    @Column({
        type: 'enum',
        enum: Role,
    })
    role: Role;

    @Column()
    password: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column()
    activatedAt: Date;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @BeforeInsert()
    async setPassword(password: string) {
        this.password = await hash(password || this.password);
    }
}
