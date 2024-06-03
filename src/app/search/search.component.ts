import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';

import { Dogs } from '../interfaces';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgFor],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  filtrarlist:Dogs[]=[];
  
  constructor(private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const data = params['data'];
      if(data){
        this.filtrarlist = JSON.parse(data) as Dogs[];
      }
    });
}
}
