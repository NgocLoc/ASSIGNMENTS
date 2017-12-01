import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TeachersService } from '../service/teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
  providers:[TeachersService]
})
export class TeachersComponent implements OnInit {
  createTeacher: FormGroup;
  updateTeacher: FormGroup;
  searchControl = new FormControl();
  teachers;
  teacher;
  idteacher: number;
  name;
  address;
  infomations;
  dels;
  contact;
  age;
  edTeacher;
  valiEmail = false;

  constructor( private teachersService: TeachersService ,private fb: FormBuilder) { }
  getAll(): void {
    this.teachersService.getAll().then(res => this.teachers = res);
  }

  ngOnInit() {
    this.getAll();
    this.createTeacher = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      age: ['',[Validators.required]],
      address: ['',[Validators.required]],
      contact: ['',[Validators.required]]
    });

    // this.searchControl.valueChanges.subscribe(value => {
      
    //   if (value === '') this.getAll();
     
    //   else
    //     this.studentsService.getName(value).then(res => this.students = res);
    // });

  }
  delete(id: number): void {
    this.idteacher = id;
  }
  confirmDelete(): void {
    this.teachersService.delete(this.idteacher).then(() => this.getAll());
  }
  onCreate(): void {
    this.teachersService.create(this.createTeacher.value).then(cus => this.getAll());
    this.createTeacher.reset({
      name: '',
      age: '',
      address: '',
      contact:''
    });
  }
  trackByStudent(tea) {
    return tea.idteacher;
  }
  edit(tea) {
    this.updateTeacher = this.fb.group({
      idteacher: [tea.idteacher],
      name: [tea.name, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      age:[tea.age,[Validators.required]],
      address: [tea.address, [Validators.required]],
      contact:[tea.contact,[Validators.required]]
    });
  }
  onUpdate(): void {
    this.teachersService.update(this.updateTeacher.value)
      .then(cus => {
        this.getAll();
      });
  }

}
