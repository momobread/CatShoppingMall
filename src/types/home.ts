interface RecommendType {
  recommend_title: string;
  recommend_content: string;
  recommend_rate: string;
}
interface HomeInfoType {
  home_info_question?: string;
  home_info_answer?: string;
  home_info_link?: string;
  home_info_img?: string;
}

export type { RecommendType, HomeInfoType };
