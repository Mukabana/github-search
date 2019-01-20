import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  user: any;
  repos: any;
  username: any;

  constructor(private _searchService: SearchService) {
    this.user = false;
  }

search(){
  this._searchService.updateUsername(this.username);

this._searchService.getUser().subscribe(user => {
  this.user = user;
});

this._searchService.getRepos().subscribe(repos => {
  this.repos = repos;
});
}
}
