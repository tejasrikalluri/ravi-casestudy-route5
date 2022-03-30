import { Component } from '@angular/core';
import { Student } from './Student';
import * as studentMarks from '../app/json/student-marks.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ravi-casestudy-route5';
  students: any = studentMarks;
  count = 0;
  ngOnInit() {
    console.log("OOOOOOOOOOOO")
    console.log(this.students)
    this.students = this.students.default;
  }
  headerClick() {
    console.log("HHHHHHHHHHHHH")
  }
}
