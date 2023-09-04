export class CreateProjectDto {
    externalId: string;
    name: string;
    description: string;
    active: boolean;
    backlogId: string;
    taigaURL: string;
    githubURL: string;
    isGlobal: boolean;
}
