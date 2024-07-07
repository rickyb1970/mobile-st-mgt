import { Injectable } from '@angular/core';
import { College } from '../models/college.model';
import { Program } from '../models/program.model';
import { Student } from '../models/student.model';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  colleges: College[] = [
    {
      collegeId: 1,
      collegeShortName: 'SCS',
      collegeFullName: 'School of Computer Studies'
    },
    {
      collegeId: 2,
      collegeShortName: 'SBM',
      collegeFullName: 'School of Business and Management'
    },
    {
      collegeId: 3,
      collegeShortName: 'SAS',
      collegeFullName: 'School of Arts and Sciences'
    },
    {
      collegeId: 4,
      collegeShortName: 'SoENG',
      collegeFullName: 'School of Engineering'
    },
    {
      collegeId: 5,
      collegeShortName: 'SAMS',
      collegeFullName: 'School of Allied Medical Sciences'
    },
    {
      collegeId: 6,
      collegeShortName: 'SED',
      collegeFullName: 'School of Education'
    }
  ];

  programs: Program[] = [
    {
      programId: 1,
      programShortName: 'BSCS',
      programFullName: 'Bachelor of Science in Computer Science',
      programCollegeId: 1
    },
    {
      programId: 2,
      programShortName: 'BSIT',
      programFullName: 'Bachelor of Science in Information Technology',
      programCollegeId: 1
    },
    {
      programId: 3,
      programShortName: 'BSGD',
      programFullName: 'Bachelor of Science in Game Development',
      programCollegeId: 1
    },
    {
      programId: 4,
      programShortName: 'BSA',
      programFullName: 'Bachelor of Science in Accountancy',
      programCollegeId: 2
    },
    {
      programId: 5,
      programShortName: 'BSMA',
      programFullName: 'Bachelor of Science in Management Accounting',
      programCollegeId: 2
    },
    {
      programId: 6,
      programShortName: 'BSBA-OM',
      programFullName: 'Bachelor of Science in Business Administration - Operation Management',
      programCollegeId: 2
    },
    {
      programId: 7,
      programShortName: 'BSBA-HRDM',
      programFullName: 'Bachelor Science in Business Administration Major in Human Resource Development Management',
      programCollegeId: 2
    },
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

  getColleges(): College[] {
    return this.colleges;
  }

  getPrograms(): Program[] {
    return this.programs;
  }

  getSelectedCollegeId(college: College): number{
    return college.collegeId;
  }

  filterPrograms(collegeId: number): Program[] {
    const filteredPrograms = this.programs.filter((program) => {
        return program.programCollegeId === collegeId;
    });

    return filteredPrograms;
  }

  getCollege(college: College): Program[]{

    // let college = event.target.value;
    let selectedCollegeId = this.getSelectedCollegeId(college);

    let newProgramList = this.filterPrograms(selectedCollegeId);

    console.log(newProgramList);

    return newProgramList;
  }

  resetForm(sourceform:FormGroup): void{
    return sourceform.reset()
  }

  toggleFormControl(sourceform: FormGroup, sourceControlName: string): void {
    return sourceform.get(sourceControlName)?.disabled ? sourceform.get(sourceControlName)?.enable() : sourceform.get(sourceControlName)?.disable();
  }

  disableFormControl(sourceform: FormGroup, sourceControlName: string): void {
    return sourceform.get(sourceControlName)?.enabled ? sourceform.get(sourceControlName)?.disable() : sourceform.get(sourceControlName)?.disable();
  }

  enableFormControl(sourceform: FormGroup, sourceControlName: string): void {
    return sourceform.get(sourceControlName)?.disabled ? sourceform.get(sourceControlName)?.enable() : sourceform.get(sourceControlName)?.enable();
  }
}
