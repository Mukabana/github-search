import { Component, OnInit } from '@angular/core';
import {Repository} from '../repository';
import {RepositoryService} from '../services/repository.service';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  providers: [RepositoryService],
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  Repository:any[];
  repositories: any[];
  userName:string;


  constructor(private repositoryservice: RepositoryService) {


  findRepository();{
    this.repositoryservice.updateRepository(this.userName);
    this.repositoryservice.getRepositoryInfo().subscribe(Repository => {
      console.log(Repository);
      this.Repository = Repository;
    });
    this.repositoryservice.getRepositoryrepositories().subscribe(repositories => {
      console.log(repositories);
      this.repositories = repositories;
  })
  }

  ngOnInit() ;{
  }

}
}
