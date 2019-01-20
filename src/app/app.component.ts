import { Component } from '@angular/core';
import {SearchComponent} from './search/search.component';
import {SearchService} from './search.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpClientModule, SearchService]
})

export class AppComponent {
  title = 'github-search';
}
