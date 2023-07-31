export class CreateStrategicIndicatorDto {
    id: number;
    dbId: number;
    name: string;
    description: string;
    value: Value;
    value_description: string;
    rationale: string;
    probabilities: Array<Probabilities>;
    date: Date;
    datasource: string;
    categories_description: string;
    hasBN: boolean;
    hasFeedback: boolean;
    confidence80: string;
    confidence95: string;
    forecastingError: string;
    missingFactors: Array<string>;
}

export class Probabilities {
    label: string;
    value: any;
    color: string;
    upperThreshold: number;
}

export class Value {
    first: number;
    second: string;
}