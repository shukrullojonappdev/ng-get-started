import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // fontColor = 'blue';
  // sayHelloId = 1;
  // canClick = false;
  // message = 'Hello world';

  message = 'I am read only!';
  canEdit = false;
  count = 0;

  constructor(private logger: LoggerService) {}

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = 'I am read only!';
    }
  }

  onLogMe() {
    this.logger.writeCount(this.count);
    this.count++;
  }

  // sayMessage() {
  //   alert(this.message);
  // }
}
