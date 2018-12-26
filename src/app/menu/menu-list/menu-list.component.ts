import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  typesOfShoes: string[] = ['Boots',
    'Clogs', 'Loafers', 'Moccasins',
    'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers', 'Boots', 'Clogs', 'Loafers',
    'Moccasins', 'Sneakers'];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('https://reqres.in/api/unknown').subscribe(() => {});
  }
}
