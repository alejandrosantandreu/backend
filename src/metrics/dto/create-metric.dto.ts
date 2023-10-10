export class CreateMetricDto {
    name: string;
    description: string;
    value: number;
    value_description: number;
    date: string;
    rationale: string;
    factors: Array<string>;
    project: string;
}
