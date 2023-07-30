import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique : true})
    externalId: string;
    @Column({unique : true})
    name: string;
    @Column()
    description: string;
    @Column({ nullable: true, default: null })
    logo: string;
    @Column()
    active: boolean;
    @Column()
    backlogId: string;
    @Column()
    taigaURL: string;
    @Column()
    githubURL: string;
    @Column({ nullable: true, default: null })
    prtURL: string;
    @Column()
    isGlobal: boolean;
    @Column({ nullable: true, default: null })
    students: string;
}
