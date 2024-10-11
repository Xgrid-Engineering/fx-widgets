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

type TPending = {
  code: string;
  name: string;
  instructor: string;
  date: string;
  timeSpans: string;
};

type TSquadronAttendance = {
  name: string;
  present: number;
  disposal: number;
  color: string;
};
