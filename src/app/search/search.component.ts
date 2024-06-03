import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { NgFor } from '@angular/common';

import { Dogs } from '../interfaces';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  filtrarlist:Dogs[]=[];
  
  constructor(private route: ActivatedRoute, private route2:Router){
  }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const data = params['data'];
      if(data){
        this.filtrarlist = JSON.parse(data) as Dogs[];
      }
    });
  }

  ShowForm(dog:Dogs):void{
    const data = JSON.stringify(dog);

    this.route2.navigate(['/form'], {
      queryParams: {data:data}
    });
  }
}
