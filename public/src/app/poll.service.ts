import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs';

@Injectable()
export class PollService {

  constructor(private _http:Http) { }

  index(){
    return this._http.get('/polls').map(data=> data.json()).toPromise();
  }
  create(poll){
    return this._http.post('/polls', poll).map(data=> data.json()).toPromise();
  }

  show(id:string){
    return this._http.get(`/polls/${id}`).map(data=> data.json()).toPromise();
  }

  delete(id:string){
    return this._http.delete(`/polls/${id}`, {}).map(data=> data.json()).toPromise();
  }
  vote1(id:string){
    return this._http.put(`/polls/${id}`, {}).map(data=> data.json()).toPromise();
  }
  vote2(id:string){
    return this._http.put(`/polls/${id}`, {}).map(data=> data.json()).toPromise();
  }

  vote3(id:string){
    return this._http.put(`/polls/${id}`, {}).map(data=> data.json()).toPromise();
  }

  vote4(id:string){
    return this._http.put(`/polls/${id}`, {}).map(data=> data.json()).toPromise();
  }


}
