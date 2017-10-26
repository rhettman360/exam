import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PollService } from '../poll.service';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  currentUser={}
  param_id:string
  poll ={}
  constructor(
    private _pollService: PollService,
    private _userService: UserService,
    private router:Router,
    private _route: ActivatedRoute
  ) {

    this._route.params.subscribe(param=>this.param_id=param.id)
    console.log("show component loaded", this.param_id);
  }

  ngOnInit() {
    this.isLoggedIn()
    this.getPoll()
    console.log(this.poll)
  }

  getPoll(){
    return this._pollService.show(this.param_id)
    .then( poll => {this.poll = poll} )
    .catch(err => console.log(err))
  }


  logout(){
    this._userService.logout();
    this.router.navigateByUrl('/');
  }

  isLoggedIn(){
    if(this._userService.getCurrentUser()==null)
    this.router.navigateByUrl('/');

  }

  vote1(id:string){
    return this._pollService.vote1(id)
    .then(poll=>console.log(poll))
    .catch(err=>console.log(err))

  }





}
