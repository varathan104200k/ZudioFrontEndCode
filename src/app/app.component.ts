import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/apiService';
import { error } from 'console';
import { HeaderComponent } from './pages/layout/header/header.component';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private router: Router){}

  show=false;
  title = 'practicewebsite';
  showHeader = false;

  ngOnInit(): void {
    console.log(this.router.url)
      this.show=!(this.router.url === '/' || this.router.url === '/login');
      console.log( "show state " + this.show)

   
  }
  
  showMethod(){
    this.show=true;
  }

}
