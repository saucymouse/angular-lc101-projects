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
  takeOffEnabled: boolean = true;
  upEnabled: boolean = true;
  downEnabled: boolean = true;
  leftEnabled: boolean = true;
  rightEnabled: boolean = true;


  gutterCheck(width, height) {
    if(width > 380000) {
      this.color = 'orange';
      this.rightEnabled = false;
    } else if (width < 0) {
      this.color = 'orange';
      this.leftEnabled = false;
    } else if (height < 0) {
      this.color = 'orange';
      this.downEnabled = false;
    } else if (height > 320000) {
      this.color = 'orange';
      this.upEnabled = false;
    } else {
      this.color = 'blue';
      this.rightEnabled = true;
      this.leftEnabled = true;
      this.upEnabled = true;
      this.downEnabled = true;
    }
  }


  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    } else if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width= this.width - 10000;
    } else if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    } else {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    this.gutterCheck(this.width, this.height);
  }

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      this.takeOffEnabled = false;
    }
  }

  handleLand(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    this.message = 'Shuttle landed.';
    this.takeOffEnabled = true;
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px';
  }

  handleMissionAbort(rocketImage) {
    let result = window.confirm('Are you sure you want to end the mission?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = 'Mission aborted.';
      this.takeOffEnabled = true;
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = '0px';
      this.rightEnabled = true;
      this.leftEnabled = true;
      this.upEnabled = true;
      this.downEnabled = true;
    }
  }
}

