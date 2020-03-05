import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/message';
import { DialogflowService } from 'src/app/dialogflow.service'
@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
  // @Input() message: Message;

  @Input('message')
  private message: Message;

  @Input() messages: Message[];
  ngOnInit() {
    // console.log(Message,'message class')
    // this.message.timestamp = new Date();
    // this.message.avatar = 'assets/images/user.png';
    // this.message.content = '';
    // this.messages.push(this.message);
    // this.dialogFlowService.getResponse(this.message.content).subscribe((res: any) => {
    //   this.messages.push(
    //     new Message(res.result.fulfillment.speech, 'assets/images/bot.png', res.timestamp)
    //   );
    // });
  }
  constructor(private dialogFlowService: DialogflowService){

  }
  public sendMessage(): void {
    console.log(this.message,'messageddd')
    this.message.timestamp = new Date();
    this.message.avatar = 'assets/images/user.png';
    this.messages.push(this.message);
    this.dialogFlowService.getResponse(this.message.content).subscribe((res: any) => {
      this.messages.push(
        new Message(res.result.fulfillment.speech, 'assets/images/bot.png', res.timestamp)
      );
    });
    this.message = new Message('', 'assets/images/user.png');
  }
}
