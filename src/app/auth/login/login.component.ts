import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  
  styleUrl: './login.component.css',
})
export class LoginComponent {

password: string = '';
email: string = '';
  
onSubmit(formData: NgForm){
    console.log(this.email);
    console.log(this.password);
    console.log(formData.form)
  }
}
