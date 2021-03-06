// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-message-item',
//   templateUrl: './message-item.component.html',
//   styleUrls: ['./message-item.component.scss']
// })
// export class MessageItemComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';
@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {
  @Input() message: Message;
  constructor() { }
  ngOnInit() {
  }
}
