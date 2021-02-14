import {Component, OnInit} from '@angular/core';
import {CourseService} from '../services/course.service';
import {ICourse} from '../models/course.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courses: ICourse[];

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getPublicContests().subscribe(res => {
      this.courses = res || [];
    });
  }

}
