import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = false;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = true;
    }
 }

 handleLanding(rocketImage) {
  window.alert('The shuttle is landing. Landing gear engaged.');
     this.color = 'green';
     this.height = 0;
     this.width = 0;
     this.message = 'The shuttle has landed.';
     rocketImage.style.bottom = '0px';
     this.takeOffEnabled = false;
}

handleAbort(rocketImage) {
    let result = window.confirm('Are you sure you want to abort the mission?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = 'Mission aborted.';
      rocketImage.style.bottom = '0px';
      this.takeOffEnabled = false;
     }
}

moveRocket(img, direction){
  if(this.takeOffEnabled === true){
    if(direction === "right"){
    let movement = parseInt(img.style.left) + 10 + 'px';
    img.style.left = movement;
    this.width = this.width + 10000;
    this.edgeWarning(this.height, this.width);
      } else if(direction === "left"){
        let movement = parseInt(img.style.left) -10 + 'px';
        img.style.left = movement;
        this.width = this.width -10000;
        this.edgeWarning(this.height, this.width);
      } else if(direction === "up"){
        let movement = parseInt(img.style.bottom) +10 +'px';
        img.style.bottom = movement;
        this.height = this.height + 10000;
        this.edgeWarning(this.height, this.width);
      } else if(direction === "down"){
        let movement = parseInt(img.style.bottom) -10 + 'px';
        img.style.bottom = movement;
        this.height = this.height - 10000;
        this.edgeWarning(this.height, this.width);
      }
  }
}

edgeWarning(height: number, width: number){
  if(this.height<0 || this.width<0 || this.height>320000 || this.width>450000){
  this.color = "orange";
  } else{
    this.color = "blue";
  }
}
}
