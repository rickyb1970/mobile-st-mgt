// src/app/student-add/student-add.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { College } from '../models/college.model';
import { Program } from '../models/program.model';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.page.html',
  styleUrls: ['./student-add.page.scss'],
})

export class StudentAddPage {

  colleges: College[] | undefined;
  programs: Program[] | undefined;

  selectedCollege: number = 0;

  studentForm: FormGroup;

  programsDisabled: boolean;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {

    this.programsDisabled = true;

    this.colleges = this.studentService.getColleges();

    this.studentForm = this.fb.group({
      studentFirstName: ['', Validators.required],
      studentLastName: ['', Validators.required],
      studentCollege: ['', Validators.required],
      studentProgram: ['', Validators.required],
      studentYear: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });

    this.studentForm.valid;
    this.studentService.disableFormControl(this.studentForm,'studentProgram');
  }

  submitForm(): void {
    if (this.studentForm.valid) {
      this.studentService.addStudent(this.studentForm.value);
      this.studentService.resetForm(this.studentForm);
      this.studentService.disableFormControl(this.studentForm,'studentProgram');
      this.router.navigate(['students']);
    }
  }

  cancel(): void {
    this.studentService.resetForm(this.studentForm);
    this.studentService.disableFormControl(this.studentForm,'studentProgram');
    this.router.navigate(['students']);
  }

  getCollege(event:any): void{
    console.log(event);
    this.studentService.enableFormControl(this.studentForm,'studentProgram');
    this.programs = this.studentService.getCollege(event.target.value);
    this.programsDisabled = false;
  }

}
