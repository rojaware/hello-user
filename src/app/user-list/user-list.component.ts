import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserManagerService } from '../user-manager.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  selectedUser: User;
  userList: User[] = [
  ];

  constructor(private userManagerService: UserManagerService) {
  }

  ngOnInit() {
    this.userList = this.userManagerService.getAll();
  }
  selectUser(user) {
     this.selectedUser = user;
  }
}
