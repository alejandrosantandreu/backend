import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    [x: string]: any;
    @PrimaryGeneratedColumn()
    id: number
    @Column({unique : true})
    username: string
    @Column()
    password: string
    @Column({unique : true})
    email: string
    @Column({ nullable: true })
    project: string
    @Column({ default: false })
    admin: boolean
}
