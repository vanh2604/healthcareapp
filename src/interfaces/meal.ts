export interface IArchivementRate {
  rate: number;
  date: string;
}

export interface IMealHistory {
  imgUrl: string;
  time: string;
}

export interface IMealResponse {
  achievement_rate: IArchivementRate;
  meal_history: IMealHistory[];
}
