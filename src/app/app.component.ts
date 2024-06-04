import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormAdoptarComponent } from './form-adoptar/form-adoptar.component';

import { Dogs } from './interfaces';
import { list_dogs, list_User } from './list';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet, 
    NgFor, 
    NgIf, 
    FormsModule,
    FormAdoptarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent{
  title = 'Puppy Web';
  dog = '';
  
  filtrarlist:Dogs[]=[];
  
  mostrar = false;
  user = '';
  password = '';
  logguer = false;

  constructor(private router: Router) { }

  UserLogin():void{
    if(list_User[0].name===this.user && list_User[0].password===this.password){
      this.logguer = true;
    }
  }

  ShowForm(dog:Dogs):void{
    const data = JSON.stringify(dog);

    this.router.navigate(['/form'], {
      queryParams: {data:data}
    });
  }

  UserCrear():void{
    
  }

  ShowSearch(){
    this.filtrarlist = list_dogs.filter(dog => dog.raza === this.dog)

    const data = JSON.stringify(this.filtrarlist);
    this.router.navigate(['/search'], {
      queryParams: {data:data}
    });
  }

  Validar():boolean{
    return this.user !== '' && this.password !== '';
  }
}
