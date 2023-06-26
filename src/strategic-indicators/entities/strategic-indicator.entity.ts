import { Value } from "./value.entity";
import { Probabilities } from "./probabilities.entity";

export class StrategicIndicator {
    id: string;
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
