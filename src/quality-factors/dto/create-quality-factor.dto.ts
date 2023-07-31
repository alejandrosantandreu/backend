export class CreateQualityFactorDto {
    id: number;
    name: string;
    description: string;
    value: number;
    value_description: string;
    date: Date;
    datasource: string;
    rationale: string;
    confidence80: string;
    confidence95: string;
    forecastingError: string;
    mismatchDays: number;
    missingMetrics: string[];
    type: any;
    strategicIndicators: string[];
    formattedDate: string;
}

export class Value {
    first: number;
    second: string;
}