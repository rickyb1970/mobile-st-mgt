import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  colleges = [
    'School of Computer Studies',
    'School of Business and Management',
    'School of Arts and Sciences',
    'School of Engineering',
    'School of Allied Medical Sciences'
  ];

  programs = [
    'Bachelor of Science in Computer Science',
    'Bachelor of Science in Information Technology',
    'Bachelor of Science in Game Development'
  ];

  constructor() { }

  private students: Student[] = [];

  addStudent(student: Student) {
    student.studentNumber = this.students.length ? this.students[this.students.length - 1].studentNumber + 1 : 1;
    this.students.push(student);
  }

  getStudents(): Student[] {
    return this.students;
  }

  getStudent(studentNumber: number): Student | undefined {
    return this.students.find(s => s.studentNumber === studentNumber);
  }

  updateStudent(updatedStudent: Student) {
    const index = this.students.findIndex(s => s.studentNumber === updatedStudent.studentNumber);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
  }

  deleteStudent(studentNumber: number) {
    this.students = this.students.filter(s => s.studentNumber !== studentNumber);
  }

  getColleges(): string[] {
    return this.colleges;
  }

  getPrograms(): string[] {
    return this.programs;
  }

}
