import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CrudServiceService} from '../../shared/crud-service.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  user: User = new User();
  userForm: FormGroup ;
  id:number=0;


  constructor(private ActivatedRouter : ActivatedRoute ,
              private http : CrudServiceService,
              private route : Router
              ) { }

  ngOnInit(): void {
    this.ActivatedRouter.params.subscribe((x)=>this.id = x['id'])
    console.log("this is the id "+this.id)
    this.http.getEmployee().subscribe(x=> {
      console.log(x);
      this.user=x.find(x=>x.id==this.id);
      console.log(this.user);
    })

    this.userForm = new FormGroup({
      email : new FormControl('' ,
        Validators.compose([Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ])),
      username : new FormControl('',
        Validators.compose([Validators.required,Validators.minLength(3)])),
      password : new FormControl('',
        Validators.compose([Validators.required,Validators.minLength(8)])),
      profession :  new FormControl('' , Validators.required),
      description : new FormControl('',Validators.required)

    })}

  get name() { return this.userForm.get('username'); }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }
  get description() { return this.userForm.get('description'); }
  get profession() { return this.userForm.get('profession'); }

  log(x){
    console.log(x);
    this.user.profession=x;
  }

  modifierUser(){
    console.log(this.user);
    this.http.modifierEmploye(this.user,this.id).subscribe();
    this.route.navigate(['/done']);
  }

}
