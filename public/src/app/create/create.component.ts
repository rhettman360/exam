import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PollService } from '../poll.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  currentUser:any={_id:''}
  newPoll={user:'', option1:{option:''}, option2:{option:''}, option3:{option:''}, option4:{option:''}}
  errors=[]
  constructor(
    private _userService:UserService,
    private _pollService: PollService,
    private router:Router
  ) { }

  ngOnInit() {
    this.isLoggedIn()
    this.getCurrentUser();
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

    createPoll(){
      this.errors=[]
      this.newPoll.user=this.currentUser._id
      console.log(this.newPoll)
      return this._pollService.create(this.newPoll)
      .then(poll=>{
        if(poll.errors){
          for(let key in poll.errors){
            let error=poll.errors[key].message
            this.errors.push(error)
          }
        }
        else{
          this.router.navigateByUrl('/dashboard')
        }
      })
      .catch(err=>console.log(err))
    }

  }
