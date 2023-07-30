import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        default: '',
    })
    name: string;

    @Column({
        nullable: false,
        default: '',
    })
    color: string;

    @Column({
        nullable: false,
        default: 0,
    })
    upperThreshold: number;

    @Column({
        nullable: false,
        default: '',
    })
    type: string;
}
