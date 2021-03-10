import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Search} from '../search';
import {RequestService} from '../request.service';
import {Repository} from '../repository';
import {User} from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    searchInfo = new Search('');
    @Output() getName = new EventEmitter<Search>();

    searchFor(data:any){
        this.getName.emit(data.value.find);
        console.log(data.value.find)
        data.reset();
    }

    public searchMe = '';
    public githubUser: any;
  
    users: any ;
    repository: any;
    public searchRepo: any;

  
  
    findUser(username:any) {
        this.githubUser = '';
        this.searchMe  = username;
        this.ngOnInit();
    }
  
  
  constructor(public githubUserRequest: RequestService, public userRepos: RequestService) { }
  
  ngOnInit() {
      this.githubUserRequest.githubUser(this.searchMe);
      this.users = this.githubUserRequest.users;
      this.userRepos.gitUserRepos(this.searchMe);
      console.log(this.userRepos);
  }
  
  
    searchRepos() {
        this.searchRepo = '';
      
  
    }
  }