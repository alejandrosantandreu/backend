export class CreateProjectDto {
    externalId: string;
    name: string;
    description: string;
    logo: string;
    active: boolean;
    backlogId: string;
    taigaURL: string;
    githubURL: string;
    prtURL: string;
    isGlobal: boolean;
    students: string;
}
