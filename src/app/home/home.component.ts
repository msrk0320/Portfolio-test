import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor() { 
  }

  ngOnInit(): void {
  }

  @HostListener('document:scroll', ['$event.target'])
  onScroll(): void {
    const verticalOffset = window.pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;
          alert(verticalOffset);
  }

}
