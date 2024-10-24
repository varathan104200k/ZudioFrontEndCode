import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HoverDirective } from '../../directives/hover.directive';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HoverDirective],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor(private router: Router){}

  ngOnInit(): void {
    console.log(this.router.url)

  }
}
