export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class TopPageModel {
  firsCategory: TopLevelCategory;
  secondCategory: string;
  title: string;
  category: string;
  hh?: {
    conut: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
  };
  advantages: {
    title: string;
    description: string;
  }[];
  seoText: string;
  tagsTitle: string;
  tags: string[];
}
