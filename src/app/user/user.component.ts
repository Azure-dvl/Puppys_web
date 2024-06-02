import { Component } from '@angular/core';

import { User } from '../interfaces';
import { list_User } from '../list';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  userl = list_User;
}
