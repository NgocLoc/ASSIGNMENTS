import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class ContactsService {
  private url = 'http://localhost:8080/contacts';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getAll() {
    return this.http.get(this.url).toPromise().then(response => response.json());
  }
  
  delete(id: number) {
    const urlId = `${this.url}/${id}`;
    return this.http.delete(urlId, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
