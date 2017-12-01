import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers:[CoursesService]
})
export class CoursesComponent implements OnInit {
  createCourse: FormGroup;
  updateCourse: FormGroup;
  courses;
  course;
  idcourse: number;
  name;
  price;
  description;
  idteacher: number;

  constructor(private coursesService: CoursesService, private fb: FormBuilder) { }
  getAll():void
  {
    this.coursesService.getAll().then(res => this.courses = res);
  }

  ngOnInit() {
    this.getAll();
    this.createCourse = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      price: ['', [Validators.required]],
      idteacher: ['',[Validators.required]],
      description:['',[Validators.required]]
    });

  }
  delete(id: number): void {
    this.idcourse = id;
  }
  confirmDelete(): void {
    this.coursesService.delete(this.idcourse).then(() => this.getAll());
  }

  onCreate(): void {
    this.coursesService.create(this.createCourse.value).then(cus => this.getAll());
    this.createCourse.reset({
      name: '',
      price: '',
      idteacher: '',
      description:''
    });
  }
  // tslint:disable-next-line:one-line
  edit(cou) {
    this.updateCourse = this.fb.group({
      idcourse: [cou.idstudent],
      name: [cou.name, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      price: [cou.price, [Validators.required]],
      idteacher: [cou.idteacher, [Validators.required]],
      description: [cou.description, [Validators.required]]
    });

}
onUpdate(): void {
  this.coursesService.update(this.updateCourse.value)
    .then(cus => {
      this.getAll();
    });
}
}
