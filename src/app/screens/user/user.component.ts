import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { RoleService } from '../../services/user/role.service';



export class UserElement{
  id: number;
  email: string;
  username: string;
  roles: string[];
  isEditing: boolean = false;
  actif: boolean = true;

  constructor(){
    this.id = 0;
    this.email = '';
    this.username = '';
    this.isEditing = false;
    this.roles = [];
  }
}

export class RoleElement{
  id: number;
  name: string;

  constructor(){
    this.id = 0;
    this.name = '';
  }
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  userlist : UserElement[] = [];
  rolesList : RoleElement[] = [];

  constructor(
   private userService: UserService,
    private roleService: RoleService
  ) {
   }

  ngOnInit(): void {
    this.refreshUserList();
    this.refreshRoleList();
  }

  convertValueToIndex(value : string){
    let index = 0;
    this.rolesList.forEach((role, i) => {
      if(role.name === value){
        index = i;
      }
    });
    return index;
  }

  async refreshRoleList(){
    let response = await this.roleService.getAllRoles();
    this.rolesList = response as RoleElement[];
  }

   async saveUser(user: any){
    user.isEditing = false;
    console.log(user);
    let id = await this.userService.updateUser(user);
  }

  editUser(user: any){
    user.isEditing = true;
  }

  async refreshUserList() {
    let response = await this.userService.getAllUsers();
    this.userlist = this.mapUsersFromApi(response as UserElement[]);
  }

  async deActivateUser(user: any){
    this.userlist= this.userlist.filter(s => s.id !== user.id);
    await this.userService.deleteUser(user.id);
    this.refreshUserList();
  }

  addUser(){
    let user = new UserElement();
    user.isEditing = true;
    this.userlist.push(user);
  }

  mapUsersFromApi(usersFromApi: any[]) : UserElement[]{
    return usersFromApi.map((apiUser) => {
      const user = new UserElement();
      user.id = apiUser.id;
      user.email = apiUser.email;
      user.username = apiUser.username;
      user.roles = apiUser.roles.map((role: any) => role.name);
      return user;
        });
    }
}
  



