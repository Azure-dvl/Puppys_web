import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DogsAd, Dogs } from '../interfaces';
import { list_DogsAd, list_dogs } from '../list';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormsModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  dogasl = list_DogsAd;

  name='';
  details='';
  raza='';
  picture='';

  AddDog():void{
    let nuevo:Dogs={
      id:list_dogs.length+1, name: this.name, details:this.details,raza:this.raza, picture:this.picture
    };
    list_dogs.push(nuevo);
  }

  Validar():boolean{
    return this.name !== ''&& this.details !== '' && this.raza !== '' && this.picture !== '';
  }
}
