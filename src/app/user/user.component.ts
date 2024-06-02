import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

import { User, DogsAd, Dogs } from '../interfaces';
import { list_User, list_DogsAd, list_dogs } from '../list';

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
  dogasl = list_DogsAd;

  formadd = false;
  listuser = false;

  Mostrar_list():void{
    this.listuser = true;
  }

  Mostrar_form():void{
    this.formadd = true;
  }
}
