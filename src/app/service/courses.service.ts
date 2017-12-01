import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class CoursesService {
  private url = 'http://localhost:8080/courses';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }
  getTeacher(id: number){
    return this.http.get(this.url + '/findteacher/' + id).toPromise().then(res => res.json());
  }
  getAll() {
    return this.http.get(this.url).toPromise().then(response => response.json());
  }

  getById(id: number) {
    const urlId = `${this.url}/${id}`;
    return this.http.get(urlId).toPromise().then(response => response.json());
  }

  // getName(name: string) {
  //   const urlName = `${this.url}/findname/?name=${name}`;
  //   return this.http.get(urlName).toPromise().then(response => response.json());
  // }

  create(courses) {
    return this.http.post(this.url, JSON.stringify(courses), { headers: this.headers })
      .toPromise()
      .catch(this.handleError);
  }

  update(courses) {
    return this.http.put(this.url, JSON.stringify(courses), { headers: this.headers })
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
