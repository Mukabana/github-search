import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {User} from '../user';
import {RepositoryService} from '../services/repository.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

userName: string;

@Output() addUser=new EventEmitter<User>();

findRepository(){
  this.repositoryservice.updateRepository(this.userName);
}

  constructor() { }

  ngOnInit() {
  }

}
