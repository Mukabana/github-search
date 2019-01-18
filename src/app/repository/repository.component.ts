import { Component, OnInit } from '@angular/core';
import {RepositoryService} from '../services/repository.service';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  providers: [RepositoryService],
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
