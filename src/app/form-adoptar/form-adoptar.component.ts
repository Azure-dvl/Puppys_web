import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Dogs, DogsAd } from '../interfaces';
import { list_dogs, list_DogsAd } from '../list';

@Component({
  selector: 'app-form-adoptar',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './form-adoptar.component.html',
  styleUrl: './form-adoptar.component.scss'
})
export class FormAdoptarComponent {
  @Input() dog?: Dogs;

  nombre: string = '';
  number: string = '';

  Adoptar(dog:Dogs):void{
    let id = dog.id;

    let object:DogsAd={id:dog.id, name:dog.name, details:dog.details, raza:dog.raza, picture:dog.picture, name_human:this.nombre, number:this.number};
    list_DogsAd.push(object);
    list_dogs.splice(id, 1);
    for (let i = 0; i<list_dogs.length; i++){
      list_dogs[i].id = i;
    }

    for (let i = 0; i<list_DogsAd.length; i++){
      list_DogsAd[i].id = i;
    }
  }
}
