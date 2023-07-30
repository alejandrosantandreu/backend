import { Value } from "./value.entity";
import { Probabilities } from "./probabilities.entity";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StrategicIndicator {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique : true})
    dbId: number;
    @Column({unique : true})
    name: string;
    @Column()
    description: string;
    @Column()
    value: number;
    @Column()
    value_description: string;
    @Column()
    rationale: string;
    @Column('text', { array: true })
    probabilities: string[];
    @Column()
    date: Date;
    @Column()
    datasource: string;
    @Column()
    categories_description: string;
    @Column({ default: false })
    hasBN: boolean;
    @Column({ default: false })
    hasFeedback: boolean;
    @Column({ nullable: true })
    confidence80: string;
    @Column({ nullable: true })
    confidence95: string;
    @Column({ nullable: true })
    forecastingError: string;
    @Column('text', { array: true })
    missingFactors: string[];
}
