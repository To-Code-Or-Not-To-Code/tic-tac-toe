import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button [ngClass]="{
      'x': value == 'X',
      'o': value == 'O'
    }">{{ value }}</button>
  `,
  styles: [
    `button {
      width: 100%;
      height: 100%;
      font-size: 5em !important;
      color: white;
      border-radius: 5px;
      background: linear-gradient(.25turn, rgb(106, 0, 212), 10%, rgb(89, 0, 177));
      border: none;
    }`,
    `button.x {
      width: 100%;
      height: 100%;
      font-size: 5em !important;
      color: white;
      border-radius: 5px;
      background: linear-gradient(.25turn, #3593ff, 30%, #3290fc);
      border: none;
    }`,
    `button.o {
      width: 100%;
      height: 100%;
      font-size: 5em !important;
      color: white;
      border-radius: 5px;
      background: linear-gradient(.25turn, #00c60ddd, 70%, #02bc0fdd);
      border: none;
    }`
  ]
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

}