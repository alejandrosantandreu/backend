import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export class ColumnNumericTransformer {
    to(data: number): number {
        return data;
    }
    from(data: string): number {
        return parseFloat(data);
    }
}

@Entity()
export class Metric {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column('numeric', {
        nullable: false,
        precision: 3, 
        scale: 2, 
        default: 0.0,
        transformer: new ColumnNumericTransformer(),
    })
    value: number;

    @Column('numeric', {
        nullable: false,
        precision: 6, 
        scale: 2, 
        default: 0.0,
        transformer: new ColumnNumericTransformer(),
    })
    value_description: number;

    @Column()
    date: string;

    @Column()
    rationale: string;

    @Column('text', { array: true })
    factors: string[];

    @Column()
    project: string;
}
