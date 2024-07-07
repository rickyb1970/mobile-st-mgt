import { College } from "./college.model";
import { Program } from "./program.model";

export interface Student {
  studentNumber: number;
  studentFirstName: string;
  studentLastName: string;
  studentCollege: College;
  studentProgram: Program;
  studentYear: number;
}
