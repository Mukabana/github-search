import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private username = ''
  private client_id = 'c24a38c68432f92b0049';
  private client_secret = 'd020a5ef1ca89b17d25fb710beeb0baeafe6ad67';

  constructor(private _http: HttpClient) {
    console.log('Search Service Started');
  }

  getUser(){
    return this._http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id+ '&client_secret='+this.client_secret).pipe(map((res: any) => {
      return res;
    }));
  }
  getRepos(){
    return this._http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id+ '&client_secret='+this.client_secret).pipe(map((res: any) => {
      return res;
    }));
  }

  updateUsername(username:any){
    this.username = username;
  }
}
