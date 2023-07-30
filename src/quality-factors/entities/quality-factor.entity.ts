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
    value: number;
    @Column()
    value_description: string;
    @Column({ type: 'datetime' })
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
    @Column('text', { array: true, nullable: true })
    missingMetrics: string[];
    @Column()
    type: string;
    @Column('text', { array: true })
    strategicIndicators: string[];
    @Column()
    formattedDate: string;
}
