import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CrudServiceService} from '../../shared/crud-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  user: User = new User();
  userForm: FormGroup ;
  constructor(private service: CrudServiceService , private route : Router) { }

  ngOnInit(): void {

    this.userForm = new FormGroup({
      email : new FormControl('' , Validators.required),
      username : new FormControl('',
       Validators.compose([Validators.required,Validators.minLength(3)])),
      password : new FormControl('',
        Validators.compose([Validators.required,Validators.minLength(8)])),
      profession :  new FormControl('' , Validators.required),
      description : new FormControl('',Validators.required)


    });
    console.log(this.userForm);
  }


  get name() { return this.userForm.get('username'); }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }
  get description() { return this.userForm.get('description'); }
  get profession() { return this.userForm.get('profession'); }


  log(x){
    console.log(x);
    this.user.profession=x;
  }


  adduser() {

   console.log(this.user);
    this.service.postUsers(this.user).subscribe();
    this.route.navigate(['/done']);
  }
}
