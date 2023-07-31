export class CreateQualityFactorDto {
    id: number;
    name: string;
    description: string;
    value: Value;
    value_description: string;
    date: Date;
    datasource: string;
    rationale: string;
    confidence80: string;
    confidence95: string;
    forecastingError: string;
    mismatchDays: number;
    missingMetrics: Array<any>;
    type: any;
    strategicIndicators: Array<string>;
    formattedDate: string;
}

export class Value {
    first: number;
    second: string;
}