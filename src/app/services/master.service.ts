import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl: string = 'http://127.0.0.1:8000/api/'

  constructor(private http: HttpClient) { }

  login(obj: any){
    return this.http.post(this.apiUrl+'login/', obj, { withCredentials: true })
  }

  register(obj: any){
    return this.http.post(this.apiUrl+'register/', obj)
  }

  getuser(){
    return this.http.get(this.apiUrl+'user/', { withCredentials: true })
  }
}
