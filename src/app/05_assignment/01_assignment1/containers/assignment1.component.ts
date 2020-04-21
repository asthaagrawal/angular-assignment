import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})

//creating input of type "text"

export class Assignment1Component {

  showInput : string;
  onInput(showInput: string) {
    this.showInput = showInput;
  }

}
