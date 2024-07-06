// src/app/student-detail/student-detail.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.page.html',
  styleUrls: ['./student-detail.page.scss'],
})
export class StudentDetailPage implements OnInit {
  student: Student | undefined;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  @Input() studentNumber: string = ''

  ngOnInit(): void {
    // const studentNumber = +this.route.snapshot.paramMap.get('studentNumber')!;
    this.student = this.studentService.getStudent(Number(this.studentNumber));
  }
}
