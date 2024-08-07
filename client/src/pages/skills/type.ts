export interface SkillType {
    id: number;
    name: string;
    progress: number,
  }
  export interface SkillSet {
    frontend: SkillType[],
    backend: SkillType[],
    database: SkillType[],
    others: SkillType[]
  }