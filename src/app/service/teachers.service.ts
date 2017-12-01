import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class TeachersService {
  private url = 'http://localhost:8080/teachers';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }
  getAll() {
    return this.http.get(this.url).toPromise().then(response => response.json());
  }
  getById(id: number) {
    const urlId = `${this.url}/${id}`;
    return this.http.get(urlId).toPromise().then(response => response.json());
  }

  getName(name: string) {
    const urlName = `${this.url}/findname/?name=${name}`;
    return this.http.get(urlName).toPromise().then(response => response.json());
  }

  getEmail(email: string) {
    const urlEmail = `${this.url}/findemail/?email=${email}`;
    return this.http.get(urlEmail).toPromise().then(response => response.json());
  }

  getEmailExists(email: string) {
    const urlEmailExists = `${this.url}/findemailexists/?email=${email}`;
    return this.http.get(urlEmailExists).toPromise().then(response => response.json());
  }

  create(teacher) {
    return this.http.post(this.url, JSON.stringify(teacher), { headers: this.headers })
      .toPromise()
      .catch(this.handleError);
  }

  update(teacher) {
    return this.http.put(this.url, JSON.stringify(teacher), { headers: this.headers })
      .toPromise()
      .catch(this.handleError);
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
