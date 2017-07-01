import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserManagerService {

  constructor() { }
  getAll(): User[] {
    return [
      {_id: '1', fullName: 'Rashmi Patri', userId: 'patri2', role: 'petr-it-admin'}, 
      {_id: '2', fullName: 'Raja Ravi', userId: 'ravir2', role: 'petr-it-security'},
      {_id: '3', fullName: 'Mihai Savin', userId: 'savin3', role: 'gcm-user'},
      {_id: '4', fullName: 'Julia Chen', userId: 'chenj', role: 'gcm-manager'},
    ];
  }
}
