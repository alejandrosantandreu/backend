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

    @Column('numeric', {
        nullable: false,
        precision: 3, 
        scale: 2, 
        default: 0.0,
        transformer: new ColumnNumericTransformer(),
    })
    upperThreshold: number;

    @Column({
        nullable: false,
        default: '',
    })
    type: string;
}


