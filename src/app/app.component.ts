import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  
  
  some = '';
  title = 'app';
  really = false;
  dd = "yess";
  myEvent(event){
   this.titleClasses.red_title=true;
   this.titleClasses.green_title=false;
  }
  myEvent2(event){
    console.log(event);
    this.titleClasses.red_title=false;
    this.titleClasses.green_title=true;   
   }
   //touchpad
   touchpad={
    'width200':true,
    'height180':true,
    'border':true

   }
   showPosition(even){
     this.mouseX=even.screenX;
     this.mouseY=even.screenY;
     this.colorX="#cc" + even.screenX;
     this.colorY="#ff" + even.screenY;
   }
   mouseX=0;
   mouseY=0;
   colorX="#000";
   colorY="#000";

  titleClass=false;
  titleClasses = {
    'bigger':true,
    'red_title':true,
    'green_title':false
  }
}
