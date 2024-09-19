import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';



export class userElement{
  id: number;
  email: string;
  username: string;
  isEditing: boolean = false;

  constructor(){
    this.id = 0;
    this.email = '';
    this.username = '';
    this.isEditing = false;
  }
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  userlist : userElement[] = [];

  constructor(
   private userService: UserService
  ) {
   }

  ngOnInit(): void {
    this.refreshUserList();
  }

   async saveUser(user: any){
    user.isEditing = false;
    let id = await this.userService.updateUser(user);
  }

  editUser(user: any){
    user.isEditing = true;
  }

  async refreshUserList() {
    let response = await this.userService.getAllUsers();
    this.userlist = response as userElement[];
  }

  deleteUser(user: any){
    this.userlist= this.userlist.filter(s => s.id !== user.id);
    this.refreshUserList();
  }

  addUser(){
    let user = new userElement();
    user.isEditing = true;
    this.userlist.push(user);
  }
}

