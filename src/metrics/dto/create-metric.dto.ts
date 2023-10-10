export class CreateMetricDto {
    name: string;
    description: string;
    value: number;
    value_description: number;
    evaluationDate: Date;
    rationale: string;
    factors: Array<string>;
    project: string;
}
