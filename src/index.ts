import { Category } from "./categories/entities/category.entity";
import { User } from "./users/entities/user.entity";
import { Project } from "./projects/entities/project.entity";
import { Metric } from "./metrics/entities/metric.entity";
import { QualityFactor } from "./quality-factors/entities/quality-factor.entity";
import { StrategicIndicator } from "./strategic-indicators/entities/strategic-indicator.entity";


const entities = [Category, User, Project, Metric, QualityFactor, StrategicIndicator]

export { Category, User, Project, Metric, QualityFactor, StrategicIndicator }
export default entities