import { Component } from '@angular/core';
import { Router } from '@angular/router'; //Import for second page

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webPersonalProject';


  constructor(private router:Router){ }

 
//method for navigating to second page
    goToPage(pageName:string):void{
      this.router.navigate([`${pageName}`]);
  }

  }
  
  

