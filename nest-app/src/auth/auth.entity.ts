import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, Entity } from 'typeorm';

@Entity("auths")
export class Auths {
    //@Column({name: "user_id"})
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ type: 'varchar'})
    username: string;

    @Column({ type: 'varchar'})
    password: string;

    @Column({ type: 'varchar'})
    email: string;

   
}