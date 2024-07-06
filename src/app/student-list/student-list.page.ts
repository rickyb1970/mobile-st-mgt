// src/app/student-list/student-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.page.html',
  styleUrls: ['./student-list.page.scss'],
})
export class StudentListPage implements OnInit {
  students: Student[] = [];

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

  addStudent() {
    this.router.navigate(['student-add']);
  }

  editStudent(studentNumber: number) {
    this.router.navigate(['student-edit', studentNumber]);
  }

  viewStudent(studentNumber: number) {
    this.router.navigate(['student-detail', studentNumber]);
  }

  deleteStudent(studentNumber: number) {
    this.studentService.deleteStudent(studentNumber);
    this.students = this.studentService.getStudents();
  }
}
