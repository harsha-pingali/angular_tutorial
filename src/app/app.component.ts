import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import WishItem from '../shared/models/wishItem';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'To Do App';
  items: WishItem[] = [
    new WishItem('Learn Angular', true),
    new WishItem('Learn Models'),
    new WishItem('Learn Spring'),
    new WishItem('Learn Ts'),
  ];
}
