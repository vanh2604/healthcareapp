export interface IRecommendNew {
  date: string;
  imgUrl: string;
  title: string;
  tag: string;
}

export interface IRecommendResponse {
  recommend_news: IRecommendNew[];
}
