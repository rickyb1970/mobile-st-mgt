// src/app/student-edit/student-edit.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.page.html',
  styleUrls: ['./student-edit.page.scss'],
})
export class StudentEditPage implements OnInit {
  colleges: string[] = [];
  programs: string[] = [];

  @Input() studentNumber: string = '';

  studentForm: FormGroup;
  student: Student | undefined;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.colleges = this.studentService.getColleges();
    this.programs = this.studentService.getPrograms();

    this.studentForm = this.fb.group({
      studentNumber: [''],
      studentFirstName: ['', Validators.required],
      studentLastName: ['', Validators.required],
      studentCollege: ['', Validators.required],
      studentProgram: ['', Validators.required],
      studentYear: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  ngOnInit(): void {
    // const studentNumber = +this.route.snapshot.paramMap.get('studentNumber')!;
    this.student = this.studentService.getStudent(Number(this.studentNumber));
    if (this.student) {
      this.studentForm.patchValue(this.student);
    }
  }

  submitForm(): void {
    if (this.studentForm.valid) {
      this.studentService.updateStudent(this.studentForm.value);
      this.studentForm.reset();
      this.router.navigate(['students']);
    }
  }

  cancel(): void {
    this.router.navigate(['students']);
  }
}
