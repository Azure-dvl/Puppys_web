import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

import { User } from '../interfaces';
import { list_User } from '../list';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  userl = list_User;

  formadd = false;
  listuser = false;

  Mostrar_list():void{
    this.listuser = true;
  }

  Mostrar_form():void{
    this.formadd = true;
  }
}
