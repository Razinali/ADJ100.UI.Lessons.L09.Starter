import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../models/message';

@Component({
  selector: 'app-message-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.css'
})
export class MessageFormComponent {
onSubmit() {
     console.log("Submitted: ", this.model);
}

  model: Message = new Message();

}
