import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

private userName: string;
private clientid = 'c24a38c68432f92b0049';
private clientsecret = 'd020a5ef1ca89b17d25fb710beeb0baeafe6ad67';

  constructor(private http: HttpClient) {
    console.log("service is now ready!");
    this.userName = '';
   }
   getUserInfo(){
     return this.http.get("https://api.github.com/users/" + this.userName + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .map(res => res.json());
   }

   getRepositoryInfo(){
     return this.http.get("https://api.github.com/users/" + this.userName + "repositories?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .map(res => res.json());
   }
updateRepository(userName:string){
  this.userName = userName;
}

}
