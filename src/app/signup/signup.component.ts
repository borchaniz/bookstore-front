import {Component, OnInit} from '@angular/core';
import {User} from '../shared/models/user';
import {UserService} from '../shared/services/user.service';

declare var swal: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  register() {
    if (!this.user.isValid()) {
      swal('Attention!', 'Please make sure you fill the form accordingly', 'warning');
    } else {
      this.userService.register(this.user).subscribe(data => {
        swal('Success!', 'Your account has been successfully created!', 'success');
      });
    }
  }
}
