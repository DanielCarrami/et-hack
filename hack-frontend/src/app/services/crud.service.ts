import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  URL: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient) { 
    this.URL = environment.baseUrl;
    this.headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
  }

  get_all(){
    let url = this.URL + "/api/team/";
    return axios.get(url)
  }

  create(body: any){
    let url = this.URL + "/api/team/";
    return axios.post(url, body)
  }
}
