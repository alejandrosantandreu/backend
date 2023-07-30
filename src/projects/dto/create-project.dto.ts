export class CreateProjectDto {
    externalId: string;
    name: string;
    description: string;
    logo: null;
    active: boolean;
    backlogId: string;
    taigaURL: string;
    githubURL: string;
    prtURL: null;
    isGlobal: boolean;
    students: null;
}
