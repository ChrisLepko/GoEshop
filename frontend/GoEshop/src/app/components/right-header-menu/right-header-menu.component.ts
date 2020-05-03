import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right-header-menu',
  templateUrl: './right-header-menu.component.html',
  styleUrls: ['./right-header-menu.component.css']
})
export class RightHeaderMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['logout'])
  }

}
