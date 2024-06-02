import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routes } from './app.routes';
import { GalleryComponent } from './gallery/gallery.component';
import { UserComponent } from './user/user.component';

import { Dogs, User } from './interfaces';
import { list_dogs, list_User } from './list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    GalleryComponent, 
    NgFor, 
    NgIf, 
    FormsModule, 
    UserComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Puppy Web';
  dog = '';
  filtrarlist:Dogs[]=[];
  mostrar = false;
  user = '';
  password = '';
  logguer = false;

  Filtrar():void{
    this.filtrarlist = list_dogs.filter(dog => dog.raza === this.dog)
  }
  Mostrarlogin():void{
    this.mostrar = true;
  }
  UserLogin():void{
    if(list_User[0].name===this.user && list_User[0].password===this.password){
      this.logguer = true;
    }
  }
}
