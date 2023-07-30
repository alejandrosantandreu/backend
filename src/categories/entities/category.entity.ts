import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    color: string;
    @Column()
    upperThreshold: number;
    @Column()
    type: string;
}
