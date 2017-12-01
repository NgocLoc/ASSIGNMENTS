import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../service/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[ContactsService]
})
export class ContactsComponent implements OnInit {
  contacts;
  contact;
  idcontact: number;

  constructor(private contactsService: ContactsService) { }
  getAll(): void {
    this.contactsService.getAll().then(res => this.contacts = res);
  }

  ngOnInit() {
    this.getAll();
  }
  delete(id: number): void {
    this.idcontact = id;
  }
  confirmDelete(): void {
    this.contactsService.delete(this.idcontact).then(() => this.getAll());
  }


}
