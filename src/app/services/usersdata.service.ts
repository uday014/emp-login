import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersdataService {
  constructor(private http: HttpClient) {}

  public user() {
    return this.http.get('https://employ-5pgb.onrender.com/employee');
  }
  public adddata(data: any) {
    return this.http.post('https://employ-5pgb.onrender.com/employee', data);
  }
  public delete(data: any) {
    return this.http.delete(
      'https://employ-5pgb.onrender.com/employee/' + data
    );
  }
  public edit(id: any, data: any) {
    return this.http.put<any>(
      'https://employ-5pgb.onrender.com/employee/' + id,
      data
    );
  }
  public Login(data: any) {
    return this.http.post(
      'https://employ-5pgb.onrender.com/employee/login',
      data
    );
  }
}
