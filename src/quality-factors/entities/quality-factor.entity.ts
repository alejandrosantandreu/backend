import { Value } from './value.entity';
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class QualityFactor {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique : true})
    name: string;
    @Column()
    description: string;
    @Column()
    value: Value;
    @Column()
    value_description: string;
    date: Date;
    @Column()
    datasource: string;
    @Column()
    rationale: string;
    @Column({ nullable: true })
    confidence80: string;
    @Column({ nullable: true })
    confidence95: string;
    @Column({ nullable: true })
    forecastingError: string;
    @Column({ nullable: true })
    mismatchDays: number;
    @Column({ nullable: true })
    missingMetrics: Array<any>;
    @Column()
    type: any;
    @Column()
    strategicIndicators: Array<string>;
    @Column()
    formattedDate: string;
}
