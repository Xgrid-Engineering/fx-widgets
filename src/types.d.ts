type TWCA = {
  name: string;
  id: string;
  activity: string;
  status: string;
  score: string;
  img: string;
  ringColor?: string;
};

type TMerit = {
  name: string;
  id: string;
  img: string;
  ringColor?: string;
  rank: number;
  obtained: number;
  total: number;
};

type TGradeRange = {
  min: number;
  max: number | string;
  grade: string;
  percentage: number;
  color: string;
};

type TChartData = {
  week: number;
  attendance: number;
  activities: number;
};
