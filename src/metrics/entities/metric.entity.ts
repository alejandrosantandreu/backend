import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Metric {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    value: number;
    @Column()
    value_description: number;
    @Column()
    date: Date;
    @Column()
    datasource: string;
    @Column()
    rationale: string;
    @Column({ nullable: true })
    confidence80: string;
    @Column({ nullable: true })
    confidence95: string;
    @Column()
    forecastingError: string;
    @Column()
    qualityFactors: Array<string>;
}
