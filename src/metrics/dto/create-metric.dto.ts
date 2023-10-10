export class CreateMetricDto {
    name: string;
    description: string;
    value: number;
    value_description: number;
    date: Date;
    rationale: string;
    qualityFactors: Array<string>;
    project: string;
}
