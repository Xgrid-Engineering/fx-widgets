import profileImage from "../assets/profile.png";
import { colors } from "../utils/constants";

export const WCA_Data: TWCA[] = [
  {
    name: "Muhammad Abdullah",
    id: "PAK12312313",
    activity: "Attendance",
    status: "PH-111",
    score: "48%",
    img: profileImage,
    ringColor: colors.red,
  },
  {
    name: "Jane Doe",
    id: "USA45645645",
    activity: "Evaluation",
    status: "Swimming",
    score: "A",
    img: profileImage,
    ringColor: colors.green,
  },
  {
    name: "John Smith",
    id: "CAN78978978",
    activity: "Failed",
    status: "PH-333",
    score: "60%",
    img: profileImage,
    ringColor: colors.yellow,
  },
  {
    name: "Alice Johnson",
    id: "UK12345678",
    activity: "Failed",
    status: "PH-444",
    score: "85%",
    img: profileImage,
    ringColor: colors.red,
  },
  {
    name: "Bob Brown",
    id: "AUS98765432",
    activity: "Attendance",
    status: "AV-555",
    score: "70%",
    img: profileImage,
    ringColor: colors.yellow,
  },
];

export const Merit_Data: TMerit[] = [
  {
    name: "Muhammad Abdullah",
    id: "PAK12312313",
    img: profileImage,
    ringColor: colors.red,
    rank: 1,
    obtained: 48.8,
    total: 100,
  },
  {
    name: "Jane Doe",
    id: "USA45645645",
    img: profileImage,
    ringColor: colors.green,
    rank: 2,
    obtained: 90.5,
    total: 100,
  },
  {
    name: "John Smith",
    id: "CAN78978978",
    img: profileImage,
    ringColor: colors.yellow,
    rank: 3,
    obtained: 60.2,
    total: 100,
  },
  {
    name: "Alice Johnson",
    id: "UK12345678",
    img: profileImage,
    ringColor: colors.red,
    rank: 120,
    obtained: 85.6,
    total: 100,
  },
  {
    name: "Bob Brown",
    id: "AUS98765432",
    img: profileImage,
    ringColor: colors.yellow,
    rank: 5,
    obtained: 70.1,
    total: 100,
  },
];

export const gradingScaleData: TGradeRange[] = [
  {
    min: 600,
    max: "Above",
    grade: "A",
    percentage: 8,
    color: "#8CE99A",
  },
  {
    min: 525,
    max: 599,
    grade: "B+",
    percentage: 26,
    color: "#74C0FC",
  },
  {
    min: 450,
    max: 524,
    grade: "B",
    percentage: 9,
    color: "#A5D8FF",
  },
  {
    min: 375,
    max: 449,
    grade: "C+",
    percentage: 7,
    color: "#FFD43B",
  },
  {
    min: 300,
    max: 374,
    grade: "C",
    percentage: 14,
    color: "#FAB005",
  },
  {
    min: 225,
    max: 299,
    grade: "D+",
    percentage: 12,
    color: "#FFA8A8",
  },
  {
    min: 150,
    max: 244,
    grade: "D",
    percentage: 10,
    color: "#FFB8B8",
  },
  {
    min: 0,
    max: 149,
    grade: "F",
    percentage: 10,
    color: "#FF8787",
  },
];

export const options = {
  responsive: true,
};

export const chartData = [
  { week: 1, attendance: 85, activities: 0 },
  { week: 2, attendance: 75, activities: 10 },
  { week: 3, attendance: 82, activities: 15 },
  { week: 4, attendance: 85, activities: 15 },
  { week: 5, attendance: 80, activities: 20 },
  { week: 6, attendance: 78, activities: 35 },
  { week: 7, attendance: 94, activities: 55 },
  { week: 8, attendance: 90, activities: 60 },
  { week: 9, attendance: 88, activities: 65 },
  { week: 10, attendance: 92, activities: 70 },
  { week: 11, attendance: 95, activities: 75 },
];
