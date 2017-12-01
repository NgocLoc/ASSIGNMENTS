import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { New1sService } from '../service/new1s.service';

@Component({
  selector: 'app-new1s',
  templateUrl: './new1s.component.html',
  styleUrls: ['./new1s.component.css'],
  providers:[New1sService]
})
export class New1sComponent implements OnInit {
  new1s;
  new1;
  createNew1: FormGroup;
  updateNew1: FormGroup;
  idnew1: number;
  title;
  image;
  infomations;
  dels;
  description;
  edNew1;

  constructor(private new1sService: New1sService, private fb: FormBuilder) { }
  getAll(): void {
    this.new1sService.getAll().then(res => this.new1s= res);
  }

  ngOnInit() {
    this.getAll();
    this.createNew1 = this.fb.group({
      titel: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      image: ['',[Validators.required]],
      description: ['',[Validators.required]]
    });
  }
  delete(id: number): void {
    this.idnew1 = id;
  }
  confirmDelete(): void {
    this.new1sService.delete(this.idnew1).then(() => this.getAll());
  }
  onCreate(): void {
    this.new1sService.create(this.createNew1.value).then(cus => this.getAll());
    this.createNew1.reset({
      titel: '',
      image: '',
      description: ''
    });
  }
  edit(new1) {
    this.updateNew1 = this.fb.group({
      idnew1: [new1.idnew1],
      titel: [new1.titel, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      image:[new1.image,[Validators.required]],
      description: [new1.description, [Validators.required]]
    });
  }
  onUpdate(): void {
    this.new1sService.update(this.updateNew1.value)
      .then(cus => {
        this.getAll();
      });
  }

}
