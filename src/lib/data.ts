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
    rank: "Aviation Cadet",
    weakCase: "Short Attendance: CS-181 (52%)",
    cause:
      "Short attendance due to personal issues, health problems, time management, lack of motivation, transport issues, or disciplinary actions.",
    action:
      "Provide counseling, academic support, monitor attendance, offer flexibility, assist with transport, assign mentors, and review disciplinary cases.",
  },
  {
    name: "Jane Doe",
    id: "USA45645645",
    activity: "Evaluation",
    status: "Swimming",
    score: "A",
    img: profileImage,
    ringColor: colors.green,
    rank: "Aviation Cadet",
    weakCase: "Evaluation: Swimming",
    cause:
      "Evaluation based on performance in swimming activities, including speed, technique, and endurance.",
    action:
      "Provide feedback, offer additional training sessions, monitor progress, and set performance goals.",
  },
  {
    name: "John Smith",
    id: "CAN78978978",
    activity: "Failed",
    status: "PH-333",
    score: "60%",
    img: profileImage,
    ringColor: colors.yellow,
    rank: "Aviation Cadet",
    weakCase: "Failed: PH-333 (60%)",
    cause:
      "Failure due to insufficient preparation, lack of understanding of the material, or external factors affecting performance.",
    action:
      "Offer remedial classes, provide additional resources, assign a tutor, and monitor progress closely.",
  },
  {
    name: "Alice Johnson",
    id: "UK12345678",
    activity: "Failed",
    status: "PH-444",
    score: "85%",
    img: profileImage,
    ringColor: colors.red,
    rank: "Aviation Cadet",
    weakCase: "Failed: PH-444 (85%)",
    cause:
      "Failure despite high score due to specific criteria not being met or errors in critical areas.",
    action:
      "Review the criteria, provide detailed feedback, offer targeted training, and reassess after improvement.",
  },
  {
    name: "Bob Brown",
    id: "AUS98765432",
    activity: "Attendance",
    status: "AV-555",
    score: "70%",
    img: profileImage,
    ringColor: colors.yellow,
    rank: "Aviation Cadet",
    weakCase: "Short Attendance: AV-555 (70%)",
    cause:
      "Short attendance due to personal issues, health problems, time management, lack of motivation, transport issues, or disciplinary actions.",
    action:
      "Provide counseling, academic support, monitor attendance, offer flexibility, assist with transport, assign mentors, and review disciplinary cases.",
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

export const Pending_Data: TPending[] = [
  {
    code: "P001 Log & Parallel",
    name: "Pending Task 1",
    instructor: "Instructor A",
    date: "22 Sep",
    timeSpans: "10:00 - 12:00",
  },
  {
    code: "P002 GD(P) and 154 GD(P)",
    name: "Pending Task 2",
    instructor: "Instructor B",
    date: "23 Sep",
    timeSpans: "14:00 - 16:00",
  },
  {
    code: "P003",
    name: "Pending Task 3",
    instructor: "Instructor C",
    date: "24 Sep",
    timeSpans: "09:00 - 11:00",
  },
  {
    code: "P001 Log & Parallel",
    name: "Pending Task 1",
    instructor: "Instructor A",
    date: "25 Sep",
    timeSpans: "10:00 - 12:00",
  },
  {
    code: "P002 GD(P) and 154 GD(P)",
    name: "Pending Task 2",
    instructor: "Instructor B",
    date: "26 Sep",
    timeSpans: "14:00 - 16:00",
  },
  {
    code: "P002 GD(P) and 154 GD(P)",
    name: "Pending Task 2",
    instructor: "Instructor B",
    date: "26 Sep",
    timeSpans: "14:00 - 16:00",
  },
  {
    code: "P002 GD(P) and 154 GD(P)",
    name: "Pending Task 2",
    instructor: "Instructor B",
    date: "26 Sep",
    timeSpans: "14:00 - 16:00",
  },
];

export const squadronAttendance: TSquadronAttendance[] = [
  {
    name: "SQN 1",
    present: 56,
    disposal: 8,
    color: colors.blue,
  },
  {
    name: "SQN 2",
    present: 18,
    disposal: 7,
    color: colors.red,
  },
  {
    name: "SQN 3",
    present: 44,
    disposal: 2,
    color: colors.green,
  },
  {
    name: "SQN 4",
    present: 52,
    disposal: 10,
    color: colors.yellow,
  },
];

export const sqnItems = [
  {
    id: 1,
    sqn: 3,
    points: 70,
    position: 1,
    data: [
      { event: "Academics", marks: 15 },
      { event: "X-country", marks: 20 },
      { event: "Long run", marks: 10 },
      { event: "Drill", marks: 15 },
      { event: "Per", marks: 10 },
    ],
  },
  {
    id: 2,
    sqn: 2,
    points: 64,
    position: 2,
    data: [
      { event: "Academics", marks: 14 },
      { event: "X-country", marks: 18 },
      { event: "Long run", marks: 12 },
      { event: "Drill", marks: 10 },
      { event: "Per", marks: 10 },
    ],
  },
  {
    id: 3,
    sqn: 1,
    points: 56,
    position: 3,
    data: [
      { event: "Academics", marks: 12 },
      { event: "X-country", marks: 15 },
      { event: "Long run", marks: 10 },
      { event: "Drill", marks: 10 },
      { event: "Per", marks: 9 },
    ],
  },
  {
    id: 4,
    sqn: 4,
    points: 24,
    position: 4,
    data: [
      { event: "Academics", marks: 5 },
      { event: "X-country", marks: 6 },
      { event: "Long run", marks: 4 },
      { event: "Drill", marks: 5 },
      { event: "Per", marks: 4 },
    ],
  },
];
