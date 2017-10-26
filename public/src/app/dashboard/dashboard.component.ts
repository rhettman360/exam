import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PollService } from '../poll.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
polls=[]

currentUser={}
  constructor(
    private _userService:UserService,
    private _pollService:PollService,
    private router:Router,

  ) { }

  ngOnInit() {
    this.isLoggedIn();
    this.getCurrentUser();
    this.getPolls();
  }
  getCurrentUser(){
      this.currentUser=this._userService.getCurrentUser();
    }
    logout(){
      this._userService.logout();
      this.router.navigateByUrl('/');
    }

    isLoggedIn(){
      if(this._userService.getCurrentUser()==null)
      this.router.navigateByUrl('/');
    }
    getPolls(){
      return this._pollService.index()
      .then(polls=>{
        this.polls=polls
      })
      .catch(err=>console.log(err))
    }
    deletePoll(id){
      return this._pollService.delete(id)
      .then(polls=>{
        this.polls=polls
          this.router.navigateByUrl('/dashboard');
      })
      .catch(err=>console.log(err))
    }

  }
