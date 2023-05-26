export interface IKidCourse {
  name: string;
  technologies: Array<string>;
  description: string;
  age: AgeRange;
  level: string;
  icon: string;
  theme: ICourseColor;
}
type ICourseColor = "blue" | "orange" | "yellow";
export type AgeRange = { from: string; to: string };

export interface ICourseResponse {
  lng: "en" | "ar" | "de" | "tr";
  courses: Array<IKidCourse>;
}
