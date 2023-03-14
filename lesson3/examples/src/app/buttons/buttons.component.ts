import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})

export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactiveGold: boolean = false;
   inactiveSilver: boolean = false;
   inactiveCopper: boolean = false;

   constructor() { }

   ngOnInit() { }

   buttonActivate (goldState: boolean, silverState: boolean, copperState: boolean){
      if(goldState === true || silverState === true || copperState === true){
         this.inactiveGold = false;
         this.inactiveSilver = false;
         this.inactiveCopper = false;
      }
}
}

