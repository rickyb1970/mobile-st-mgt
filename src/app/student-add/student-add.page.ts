// src/app/student-add/student-add.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.page.html',
  styleUrls: ['./student-add.page.scss'],
})

export class StudentAddPage {

  colleges: string[] = [];
  programs: string[] = [];

  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {
    // console.log(this.colleges);

    this.colleges = this.studentService.getColleges();
    this.programs = this.studentService.getPrograms();

    this.studentForm = this.fb.group({
      studentFirstName: ['', Validators.required],
      studentLastName: ['', Validators.required],
      studentCollege: ['', Validators.required],
      studentProgram: ['', Validators.required],
      studentYear: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  submitForm(): void {
    if (this.studentForm.valid) {
      this.studentService.addStudent(this.studentForm.value);
      this.studentForm.reset();
      this.router.navigate(['students']);
    }
  }

  cancel(): void {
    this.router.navigate(['students']);
  }

}
