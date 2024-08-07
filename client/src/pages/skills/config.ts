import { SkillSet } from "./type";

export const skillSet: SkillSet = {
    frontend: [
      { id: 1, name: 'HTML', progress: 80 },
      { id: 2, name: 'CSS', progress: 80 },
      { id: 3, name: 'JavaScript', progress: 80 },
      { id: 4, name: 'Tailwind CSS', progress: 45 },
      { id: 5, name: 'Sass', progress: 55 },
      { id: 6, name: 'React', progress: 80 },
      { id: 7, name: 'Bootstrap', progress: 70 },
    ],
    backend: [
      { id: 8, name: 'Node.js', progress: 50 },
      { id: 9, name: 'Express.js', progress: 50 },
    ],
    database: [{ id: 10, name: 'MongoDB', progress: 40 }],
    others: [{ id: 11, name: 'AWS', progress: 20 }],
  };