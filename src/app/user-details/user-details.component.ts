import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  template: `
    <!-- HERE: we add the template for the user details -->
       <section *ngIf="user">
         <h2>You selected: {{user.fullName}}</h2>
         <h3>Description</h3>
         <p>
            {{user.fullName}} with id of {{user.userId}} plays as {{user.role}} role
         </p>
       </section>
  `,
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
