import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-navigation-bar',
  templateUrl: './bottom-navigation-bar.component.html',
  styleUrls: ['./bottom-navigation-bar.component.css']
})
export class BottomNavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.removeItem("userToken");
  }

}
