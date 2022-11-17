export interface IMyExcercise {
  title: string;
  kcal: number;
  time: string;
}

export interface IMyDiary {
  date: string;
  time: string;
  content: string;
}

export interface IRecordResponse {
  my_exercises: IMyExcercise[];
  my_diary: IMyDiary[];
}
