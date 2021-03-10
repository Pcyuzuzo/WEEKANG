import { Component, OnInit } from '@angular/core';
import {RequestService} from '../request.service';
import {Repository} from '../repository';
import {User} from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [RequestService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public searchMe = '';
  public githubUser: any;


  users: any;
  repository: any;


  findUser(username:any) {
      this.githubUser = '';
      this.searchMe  = username;
      this.ngOnInit();
  }


constructor(public githubUserRequest:RequestService, public userRepos: RequestService) { }

ngOnInit() {
    this.githubUserRequest.githubUser(this.searchMe);
    this.users = this.githubUserRequest.users;
    this.userRepos.gitUserRepos(this.searchMe);
    console.log(this.userRepos);
}
}