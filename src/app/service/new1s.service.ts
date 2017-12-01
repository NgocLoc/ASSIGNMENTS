import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class New1sService {
  private url = 'http://localhost:8080/new1s';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }
  
    getAll() {
      return this.http.get(this.url).toPromise().then(response => response.json());
    }
    getById(id: number) {
      const urlId = `${this.url}/${id}`;
      return this.http.get(urlId).toPromise().then(response => response.json());
    }
    update(new1) {
      return this.http.put(this.url, JSON.stringify(new1), { headers: this.headers })
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
    create(new1s) {
      console.log(JSON.stringify(new1s));
      return this.http.post(this.url, JSON.stringify(new1s), { headers: this.headers })
        .toPromise();
    }
  
}
