import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test-api';
  usersList:User[] = [];
  constructor(private userService:UserService){}

  ngOnInit(): void {
     this.getUsersList();
  }

  getUsersList(){
    this.userService.getUserslist().subscribe((resp) =>{
       this.usersList = resp;
    });
  }

  deleteUser(userId:number){
    this.usersList = this.usersList.filter((item) => item.id !== userId);
  }
}
