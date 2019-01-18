import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

private username: string;

  constructor(private http: HttpClient) {
    console.log("service is now ready!");
    this.username = 'Mukabana';
   }
   getRepositoryInfo(){
     return this.http.get("https://api.github.com/users/" + this.username);
   }
}
